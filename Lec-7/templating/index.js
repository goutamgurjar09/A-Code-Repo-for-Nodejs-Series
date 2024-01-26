const express = require('express')
const app = express()
const path = require('path')  //for path.join

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

//home  route/default path
app.get('/',(req,res)=>{
    res.render('app') //hm direct app isliye likh rhe bcz views folder tk ka path to already hmne defined kr diya upr  and  app.ejs pura file name likhne ki need nhi hai bcz hmne phle hi template engine->ejs ko set kr diya
}) 

//then run it and see on browser , app.ejs file me jo bhi likha hoga bo aa jayega browser pr / req. hit krne pr-> http://localhost:8080/
// PS C:\Users\HP\Desktop\node> cd lec-7
// PS C:\Users\HP\Desktop\node\lec-7> cd templating
// PS C:\Users\HP\Desktop\node\lec-7\templating> npm start

// > templating@1.0.0 start
// > nodemon ./index.js    

// [nodemon] 3.0.2
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node ./index.js`
// server connected at port 8080

//-----------------
// /gurjar route

// app.get('/gurjar',(req,res)=>{
//     res.render('gurjar') //->gurjar.ejs file name inside views 
// }) 

//Note: jitni baar/jb bhi views ke folder me new file ejs ki create krege tb first time server start krna compulsary hai npm start ->PS C:\Users\HP\Desktop\node\Lec-7\templating> npm start
//Note: kise bhi ejs ke page  ko chlane ke liye render method ka use krte hai ->res.render('gurjar')

//-----------------

let arr = ['hi','hello','goutam']
let arr2 = ['hello','ji','kaise ho']
app.get('/gurjar',(req,res)=>{
    res.render('gurjar' , {arr , arr2}) //->gurjar.ejs file me arr ko bhej rhe-> as an object pass krna hai
}) 


//---------------------
//Task- i have to generate a random number between 6 to 31 -> where 6 inclusive and 31 exclusive
//let randomNum = Math.floor(Math.random() * (31 - 6)) + 6  
let randomNum = Math.floor(Math.random() * (25) + 6) //+6 isliye bcz 6 se start krna hai random no. ko
app.get('/random', (req,res)=>{
     res.render('random',{randomNum}) //randomNum as a obj. pass krna hai
})


//-----------------------
//task-2 we have an todolist array name of todoarr you have to show it in the todolist.ejs file
let todoarr = ['task1','task2','task3','task4']
app.get('/todo' , (req,res)=>{
    res.render('todolist',{todoarr})
})


app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})


//Note:why add +6 -> Range Shifting: The entire range calculated in the first step starts from 6, but if you want the range to start from a different number (let's say 1), you need to add that number to the result.




//first time when you run the server

// PS C:\Users\HP\Desktop\node> cd lec-7
// PS C:\Users\HP\Desktop\node\lec-7> cd templating
// PS C:\Users\HP\Desktop\node\lec-7\templating> npm start

// > templating@1.0.0 start
// > nodemon ./index.js    

// [nodemon] 3.0.2
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node ./index.js`
// server connected at port 8080