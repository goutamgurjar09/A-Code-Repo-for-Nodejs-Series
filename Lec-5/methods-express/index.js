const express = require('express')
const app = express()

// console.log(app)

//----------------------
//its a middleware jo hr ek incoming req. pr chlta hai and uske (req.) ke corrousponding server hme responce deta hai
// app.use( (req,res) =>{ //path is not specified
//      res.send('<h1>hi this is goutam gurjar</h1>') //then go browser and send request on the server/port -> http://localhost:4000/goutam/ and  http://localhost:4000/goutam/gurjar and so on....  means ydi hm path defined nhi krte tb ye har ek request pr chlega and sever hme responce dega
// })


//------------------
 //path is specified and it will only work for-> /cat req.  and also works for http://localhost:4000/cat/dog ,http://localhost:4000/cat/dog/lion  bcz ise first matching path /cat mila isliye  /cat -> ke baad kuch bhi likhe/req. kre server se ye work krega
 //but it won`t work for this path/req. -> http://localhost:4000/goutam/ ,http://localhost:4000/goutam/gurjar, http://localhost:4000/, http://localhost:4000, http://localhost:4000/dog

// app.use('/cat', (req,res) =>{
//     res.send('<h1>hi this is goutam gurjar middleware</h1>')   
// })


//-----------------
//app.get() -> application ke ander jb get request send krte hai jo ki by default jati hai means phle se hi tb hme path and callback this 2 parameter dena compulsary hai
//-> Routes sends HTTP GET requests to the specified path with the specified callback functions.
//this will work on only specified /goutam path  
// but this will not work for these req.-> http://localhost:4000/goutam/gurjar ,http://localhost:4000/a/goutam , http://localhost:4000/dog  

// app.get('/goutam',(req,res) =>{
//     res.send('<h1>hi this side chotu gurjar</h1>')   
// })



//difference between app.use() and app.get()

//1. app.use() hr ek incoming request pr chlega like-> get ,post,put,patch etc.   -> /,/goutam  iska mtlb hm get ,post,put ya patch  method ki help se request  krte hai server se 
//2. app.get() ye only get request ke liye chlega and only specified path pr chlega
//3. app.use() isme path specified nhi krege to ye hr ek re. ke liye chlega   and path specified krege tb ye use path pr chlega  
//4. but  main diff. between app.get() and app.use() let see 
//5. app.use() will work after specified path-> http://localhost:4000/goutam/gurjar   and app.get()-> will not work after specified path ->http://localhost:4000/goutam/gurjar


//---------------------
//middleware advance->  middleware  like API ke jaise kaam krta hai mtlb 2 chijo ko aapas me jodne ka kaam krta hai
// ex-> jaise aapne ek req. bheji server ko /product/buy (its a route/path)->url pr to  hm phle check krege ki user login hai ya nhi -> yhi kaam Middleware krta hai
//or tbi server hme responce dega jb user login hoga

app.get('/cat',(req,res,next) => {
    console.log('hi lala gurjar') //-> error dega
    next() //next() menas agle same path middleware pr bhejo mtlb code ke flow ko aage bhej do->/cat pr then next bala middleware chlega
})


//------------------
//** what will be happen when we will specified same path
//->then app.use() bali req. hit hogi and print->hi this is goutam gurjar middleware hoga
//-> bcz code ka flow top to bottom hota hai and server ne us req.(/cat) pr responce already send kr diya isliye
//-> but is code ko ydi hm app.use() ke phle (top) put krege to ye req. chlegi and res. milega server se jo bhi hm send krege

app.get('/cat',(req,res) =>{ 
    res.send('<h1>hi get req from again cat</h1>')   
})


//----------------------
//for all left over path means jo yha already specified path hai un pr nhi chlega   but is code ko top pr le jayege to ye hr ek path pr chlega and niche bale code ko avoid kr dega bcg the flow of the code is top to bottom
app.get('*',(req,res) =>{ 
    res.send('error page 404')   
})

//------------------

app.listen(4000,function(req,res){
    console.log('server connected successfuly at port 4000')
})



//Note: Request-> kise bhi req. ko server pr send krne ke liye method and path  dono impotant hai/X-facter 
//Method means-> get,post,put,patch,delete etc.
//Path means->  / ,/goutam ,/ram ,/g/c etc. 

//Note: Remember one thing is that jb bhi hm req. send krte hai tb by default method get hoti hai and path / hota hai mtlb hm ise likhe ya na likhe by default server smjh jata hai ->http://localhost:4000  or http://localhost:4000/
