const express = require('express')  //function
const app = express()            //object
const methodOverride = require('method-override')  //for put patch and delete method go and see-> https://www.npmjs.com/package/method-override

const path = require('path')    //node module already present



app.set('view engine' , 'ejs') //engine
app.set('views' , path.join(__dirname , 'views')) //views folder template

app.use(express.static(path.join(__dirname , 'public'))) //static files-> pubic dir.


//body parsing middlewares  ->Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
//app.use(express.json())// for parsing application/json data
app.use(express.urlencoded({ extended: true })) // for parsing form data -> application/x-www-form-urlencoded

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method')) //method override

//---------------------

let comments = [//arr of object
      {
        id:0,
        username:"goutam",
        comment: "its awesome"
      },
      {
        id:1,
        username:"Ram",
        comment: "wow so sweet"
      },
      {
        id:2,
        username:"Kanu",
        comment: "its Nice"
      },
      {
        id:3,
        username:"Sahaj",
        comment: "its elegant"
      },
]

//-------------------------
//Restful route according to the restful table pls read-> right to left

//Task-1  -> Show all the blogs/comments->  where are my comments ->DB == Array

app.get('/comments',(req,res)=>{
    res.render('index',{comments})  //index.ejs inside views   and comments array ko as a object bhejege hai index.ejs me
})

//----------------
//Task-2  -> Show form to make new comments ->array

app.get('/comment/new', (req,res)=>{ //http://localhost:8080/comment/new
    res.render('new')
}) 
 

//----------------
//Task-3  ->then we need to add the comment in the->array/DB -> using post data  sent req.body

// app.post('/comments', (req,res)=>{
//     console.log(req.body)  //req.body->its an object and by default it gives  undefined on console jb bhi aap post method ke through form data send kroge  ->when we want to change this then we  use middleware jo ki upr mantion hai  ->app.use(express.urlencoded({ extended: true }))
//     // let {username,}
//     res.send(req.body)
// })
//Note: first req. on this path ->http://localhost:8080/comment/new yha pr hme form milega 
//them usko hme fill krke submit krege  tb -> then response on this path pr milega post method ke through->app.post('/comments') -> http://localhost:8080/comments ->  {"username":"goutam","comment":"hy dear"}   and console pr bhi aa jayega

//-------------
//destructure this object upr jo req.body se return hua usko-> { username: 'hy', comment: 'mis' }
app.post('/comments', (req,res)=>{ 
   let {username,comment} = req.body;
   comments.push( {username:username , comment:comment , id:comments.length } ) //ydi kise object ki key and value same hai to use hm niche likha hai vese likh skte hai
  // comments.push( {username , comment , id:comments.length } ) //(ES6 syntax)
   res.redirect('/comments') //GET req. gyi '/'comments' path pr jo task-1 me define hai  and hme ek new object add ho jayega with->id,name and comment jaise hi hm form ko fill krke submit krege
})
                      


//----------------------

//Task-4: to show a perticuler comment from the DB/array according to id-> req.params  ->using get() data  sent req.params

app.get('/comments/:id', (req,res)=>{
  //  console.log( req.params.id) //this will return id jo bhi hm url pr type krege -> http://localhost:8080/comments/5  -> 5     and id  means array/comment ki id
  //  res.send( req.params.id)    //ye browser pr show hogi
  // console.log( req.params)  //this will return id in the form of object jo bhi hm url pr type krege bcz req.params ek object hai -> http://localhost:8080/comments/5   ->{ id: '1' }
  // res.send( req.params)

  //destructure the params object  ->{ id: '1' }
  let {id} = req.params        //to get id
  let foundComment = comments.find( (comment)=>{
    //  console.log(comment.id)
    //  console.log(id)
   // return comment.id === id; //ydi === krege to console.log(foundcomment) me undefined aayega bcz  hmara array of object me id -> number datatype hai-> {id:0}    and jo hm req.params kr rhe bo id ek string datatype hai ->{ id: '1' }
   // return comment.id == id; ->way-1
    return comment.id === parseInt(id); //->way-2

  })
 // console.log(foundComment)  //{"id":2,"username":"Kanu","comment":"its Nice"}  means id ke through hm data/product jo ki inside the commentsarray me hai get kr skte hai then hme ise show.ejs page pr bhejna hai
  //res.send(foundComment)
  res.render('show',{foundComment})  //->http://localhost:8080/comments/3

})


//Task-5: to show the edit form of one blog/comment  on the edit.ejs

app.get('/comments/:id/edit',(req,res)=>{
  let {id} = req.params                           //to get id of comment object
  let foundComment = comments.find( (comment)=>{  //to show one comment/blog according to id
    return comment.id === parseInt(id); 
  })
  res.render('edit',{foundComment})
})
//Note-> http://localhost:8080/comments/2/edit  isse hm only edit kr skte hai form me but actual changes Task-6 se milega


//Task-6 To actually edit/update in the DB/Array

app.patch('/comments/:id', (req,res)=>{
  let {id} = req.params                           
  let foundComment = comments.find( (comment)=>{  
    return comment.id === parseInt(id); 
  })
  let{comment} = req.body //post  //form ko post method dena pdega tbi comment req.body me aayega  and  form ke ander jo bhi changes krege bo milega isse this is textarea name inide the edit.ejs page->   comment
  foundComment.comment = comment
  res.redirect('/comments')  //finally /comments path pr hme changes dikhega ->main array of object me 
})

//Note-> http://localhost:8080/comments/2/edit->   yha ek form milega ispr hme edit krna hai   and   http://localhost:8080/comments  is path pr hm jo bhi edit krege bo mil jayega  


//Task-7 To actually delete from the DB/Array

app.delete('/comments/:id', (req,res)=>{   //and also see index.ejs isme hme ek form bnana pdega taki hm post method ko delete method se override kr ske same Task-6 ke jaise 
  let {id} = req.params                           
  let Newcomments = comments.filter( (comment)=>{
      return comment.id != id
  })
  comments = Newcomments
  console.log(Newcomments , 'gouti')
  res.redirect('/comments')
})
//then hit http://localhost:8080/comments/

app.listen(8080,()=>{ //listener
    console.log('server connected at port: 8080')
})



//-----------------------------------------
//Note:-

//Task-4  In the given example, req.params would be { userId: '1' }  and the response will be {userid: "1"}.
// You can then use req.params.userId to access the specific value of the userId parameter in your route handle ->1


// The :Id part in the route pattern is a placeholder for a dynamic value.
// When a request is made to a URL that matches this route pattern (e.g., /users/123), Express extracts the actual value ('123') from the URL and makes it available in req.params.
// req.params is an object where the keys are the parameter names defined in the route pattern, and the values are the corresponding values from the URL.


//In the context of web development, particularly in server-side frameworks like Express.js for Node.js, req.params refers to the parameters that are extracted from the URL path. These parameters are typically defined in the route pattern and are accessible within your server-side code.
























