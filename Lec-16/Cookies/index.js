const express = require('express')
const app = express() 
const cookieParser = require('cookie-parser'); //hmne yha cookie-parser to require kiya hai to ise run krne ke liye hm ek middleware ka use krte hai

//app.use(cookieParser())
app.use(cookieParser('hyiamyoursecretkey')) // secret   ->otherwise Error: cookieParser("secret") required for signed cookies




//cookies server bhejta hai responce ke sath   and hme ek Route  cretae krna hai jo server send krwaye cookies ko to the Client - 

app.get('/SetCookies' , (req,res)=>{  
    res.cookie('mode' , 'dark');
    res.cookie('username' , 'goutam');   //cookies hme server bhejta hai response kr roop me isliye res.cookie() ka use krte hai
    res.cookie('loacation' , 'indore');
    //res.cookie('password' , 'goutam@123'); //password	goutam%40123     -> this means we  never send password /credit card details with cookies
    res.cookie('password' , 'goutam.code@123',{signed:true}); //to secure your password we can use signed-cookies-> s%3Agoutam.code%40123.zE8igXka23uTvnbE8eWwaLu22MqBPpxKRrlO8NZ6HDA
    res.cookie('age' , 24);
    //res.cookie({'color':'red','gender':'male'});//we can never send object as cookie ->[object Object]	undefined
    res.send("Cookies Set/send Successfully")
})


app.get('/GetCookies' , (req,res)=>{
    //res.send(req.cookies); // And cookies stored on client side or client req. bhejta hai to usko dekhne ke liye req.cookies ka use krte hai  ->  sending all cookies  on browser as object->{"mode":"dark","username":"goutam","loacation":"indore","age":"24"}
    let {username,age} = req.cookies;
    console.log(`user name is ${username} and age is ${age}`)//user name is goutam and age is 24 
})


app.get('/',(req,res)=>{
    //console.log(req.cookies);  //{"mode":"dark","username":"goutam","loacation":"indore","age":"24"} -> but password nhi aayega isme bcz hmne signed cookies use ki hai for security isliye signed-cookie show nhi hogi 
    //res.send(req.cookies);    
    
    console.log(req.signedCookies);  //{"password":"goutam.code@123"}
    res.send(req.signedCookies); //{"password":"goutam.code@123"}
})



app.listen(5050,()=>{
    console.log("server connected at 5050")
})


//What is signed key/Signed Cookies:

// When you use cookie-parser in your Express.js application, you can provide a secret key.
// This secret key is used to sign and verify cookies. If you don't provide a secret, cookies won't be signed.
// When you later access cookies in your route handlers (req.cookies), the cookie-parser middleware can automatically verify the signatures if a secret is provided.