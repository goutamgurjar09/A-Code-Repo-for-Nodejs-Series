const express = require('express')
const app = express() 
const session = require('express-session');


//middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true } // secure means http->s  ->http ka s version  its need for production
}))

app.get('/',(req,res)=>{
    res.send('welcome back to sessionId');

})
 //task-2
app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`count is: '${req.session.count}`);
})

//task-1
// app.get('/setname',(req,res)=>{
//     req.session.username = 'goutam';
//     res.send(' finnallly session added '); //open console and go Application see sessionId inside cookies  and jb bhi hm swerver ko referesh krege tb session id change ho jati hai means new session id add ho jati hai-> 	connect.sid	-> s%3A6c-KL1DBIuXVcaUPZMOIoRmd7iyohIKr.kJ8y%2FhaHJwYvbAem1d00oKH0UDcg0iQ3gJJQS6YWAdU
// })

app.get('/setname',(req,res)=>{
    req.session.username = 'goutam';
    res.send(' finally session username added now run /greet '); //open console and go Application see sessionId inside cookies  and jb bhi hm swerver ko referesh krege tb session id change ho jati hai means new session id add ho jati hai-> 	connect.sid	-> s%3A6c-KL1DBIuXVcaUPZMOIoRmd7iyohIKr.kJ8y%2FhaHJwYvbAem1d00oKH0UDcg0iQ3gJJQS6YWAdU
})

app.get('/greet',(req,res)=>{
    let {username='anonymous'}= req.session; //  /setname/req.session me ydi  username ki value nhi hui to hme ->'anonymous' milega
    res.send(`hy from ${username}`); 
})

app.listen(5050,()=>{
    console.log("server connected at 5050")
})