const express = require('express')
const app = express()



//Note-we cant create infinite route/path ->http://localhost:5050/r/doggy

// app.get('/r/cat',(req,res)=>{
//    res.send("hi cat")
// })

// app.get('/r/dog',(req,res)=>{
//     res.send("hi dog")
// })

//----------------
// path paramter(:) -> req.params -> its an object
//http://localhost:5000/r/ram .....

// app.get('/r/:monkey',(req,res)=>{
//     //console.log('req')
//     //console.log(req.params) //{ monkey: 'ram' } ,{ monkey: 'dog' } -> params and query is an object here monkey is key and value is path

//     res.send("request")
// })

//--------------------------
//destructure the params object
// app.get('/r/:monkey',(req,res)=>{
    
//     //console.log(req.params) //{ monkey: 'ram' } ,{ monkey: 'dog' } -> params and query is an object here monkey is key and value is path
//      let{monkey} = req.params
//      res.send(`request sent at: ${monkey}`)
// })

//------------------------
// query paramter(?) -> req.query -> object

// app.get('/search',(req,res)=>{
//     console.log(req)
//     res.send(`query parameter aagya`)  
// })
//http://localhost:5000/search/?q=lion
//then lets see on console
// params: {},
// query: { q: 'lion' },
//http://localhost:5000/search/?krishna=radha&wife=radha

// params: {},
// query: { krishna: 'radha', wife: 'radha' },


//------------------------
//destructure the query object with key then get value

app.get('/search',(req,res)=>{
    console.log(req.query)
    let{krishna,wife} = req.query
     res.send(`query parameter ${krishna} and ${wife}`)  
})
//http://localhost:5000/search/?krishna=radha&wife=radha and see on browser


app.listen(5000, (req,res)=>{
    console.log('server conected at port 5000')
})


//-----------------------------
//Note:params -> open  https://www.reddit.com/r/cat/  and try this and see  and here cat is value and kay jo ki hm req/path pass krege get method me ->app.get('/r/:monkey'

//http  -> protocall
//www.reddit.com -> Resourse/url jiske through req. send krte hai
// /r/ -> this is fixed path menas not changeble
// /cat -> this is changeble path menas /r.. ke baad koi bhi path likh skte hai


//Note:query parameter-> https://www.reddit.com/search/?q=dog...    -> /search/?q=dog  whenever we see a-> /?q this is called query-parameter
// ?q=dog  here  q->key and dog->value