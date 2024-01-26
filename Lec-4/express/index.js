//Library-  means isko apn apne hisab se use kr skte hai

//Framework-  means ye  jo bolega vaise use krege  and express is a framework of nodejs


//Express js  -> its used for create our own server

//server -  its a computer /supercomputer

//ex-> jb bhi hm kise website pr form/information fill krte hai to isme hm hi request send krte hai server pr and hme responce milta hai server se 
//and ye sb kaam hm hi krte hai means request bhi and responce bhi means server hmara computer hai jiske through hm ye kaam krte hai  and ye sbi computer ek dusre se connected rhte hai
//and jo resonce milta hai usi ko server bolte hai or ye responce computer se hi aata hai means server like computer hai


//Note: jb bhi hm kise package ko install krte hai using npm to hme ise require krna pdega install krne ke baad

// PS C:\Users\HP\Desktop\node> cd Lec-4
// PS C:\Users\HP\Desktop\node\Lec-4> cd express
// PS C:\Users\HP\Desktop\node\Lec-4\express> npm init -y   -> first backend ke project ko initialize krege
// Wrote to C:\Users\HP\Desktop\node\Lec-4\express\package.json:

// {
//   "name": "express",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"   
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

// PS C:\Users\HP\Desktop\node\Lec-4\express> npm i express   ->use to install package


//Note: npm init-> krne se  package.json file create hoti hai
// and  npm i express -> and koi bhi package install krne pr ek folder create hota hao node_modules name ka and package-lock.json file create hoti hai

//Note: Remember one thing kbhi bhi hme package-lock.json and node_modules me changes krne ki need nhi hai or na hi krna hai bcz ydi glti se chota sa bhi kuch change kr diya to hmara project fat/khatam ho jayega


//---------------------------
// (alias) express(): Express
// import express
// Creates an Express application. The express() function is a top-level function exported by the express module

//-------------------
const express = require('express') //jb bhi app express ko require krte ho tb ek-> function milta  hai

//this app is the entire instance of your application

const app = express()      //to return something bcz ye function hai and return krne pr is app ke ander ek-> object aata hai  and app-> is our main application
//console.log(app)       //this will return huge massive object

// PS C:\Users\HP\Desktop\node> cd Lec-4     
// PS C:\Users\HP\Desktop\node\Lec-4> cd express   
// PS C:\Users\HP\Desktop\node\Lec-4\express> node index.js

//-------------------------
//Note: default port for backend is means mostly use-> 8080  and port hm 2000-9000 tk koi sa bhi bna skte hai and is port pr server create kr skte hai with the help of express
//means server ko request bhi hm hi send krte hai and resopnce bhi hm hi dete hai jo ki server return krta hai and 
//to server hm hi hai to hme ek perticuler  port number(like 8080 etc.) pr request sunni pdegi uske liye listen ka use krte hai

//---------------------
// app.listen(8080 , ()=>{  //it acceprt a port num. and callback function  //port->5050,7050 ...etc.
//   console.log('server is connected at port number 8080 ')
  
// })

//----------------
//Note: the app is instance of your application  that will listen all the commands on which port number(8080) and callback function ke through hme Message mil rha ki hmara kaam hua ya nhi

// PS C:\Users\HP\Desktop\node\Lec-4\express> node index.js    
// server is connected at port number 8080 

// after that  hme server se interection krne ke liye browser pr localhost:8080/ pr jana pdega

//----------------------------
//ctrl + c double press krne pr server kill ho jayega

// server is connected at port number 8080
// PS C:\Users\HP\Desktop\node\Lec-4\express> ^C
// PS C:\Users\HP\Desktop\node\Lec-4\express>


//---------------------------
// console.log('server is connected at port number 8080 hi this is ')
// PS C:\Users\HP\Desktop\node\Lec-4\express> node index.js"
// server is connected at port number 8080

//Note:jb bhi hm ek baar server create krne ke baad code me koi bhi changes krte hai to bo change nhi hoga 
//iske liye aapko server ko kill krna pdega then resatrt krna pdega server ko tbi changes hoga


//Note:so everytime you make a changes in your code you need to restart your server


//Note:nodemon -> isse bachane ke liye hmare pass ek package hai nodemon jo ki auto matically cahnge kr deta hai jb bhi hm code me changes krte hai and hme server ko baar baar restart nhi krna pdeta


//Note: our by default path is /  hai -> localhost:8080/ ==  localhost:8080 

//Note: app ke ander bhot sare method hote hai->  like app.get  but jb aap koi method specify nhi krte tb by default GET method chl rha hota hai

//Note: jb bhi hm browser pr  localhost:8080 type krte hai after creating the server to hme ->  Cannot GET /    deta hai
//and ye isliye milta hai bcz hm  abi by default jo localhost:8080/-> path pr hm jo request kr he  bo by default GET request hai and hme is get request pr / path pr ky send/dena hai nhi pta mtlb abi hmne btaya nhi bcz server to hm hi hai 
//isliye abi kuch responce nhi mil rha server se bcz abi hmne kuch bheja nhi

//------------------------------

//nodemon -> its a third party package /tool that helps to restart our server when we any changes our code it restart automatically the server and show the changing output 

//PS C:\Users\HP\Desktop\node\Lec-4\express> npm i nodemon

//then open package.json and write -> "start": "nodemon index.js" inside the scripts object

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon index.js"
//   },

//after that hme ek baar to server start krna pdega with the help of-> npm start

//server start nodemon ne kiya lets see->[nodemon] starting `node index.js`

//-------------------
// PS C:\Users\HP\Desktop\node\Lec-4\express> npm start

// > express@1.0.0 start
// > nodemon index.js   

// [nodemon] 3.0.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index.js`
// server is connected at port number 8080 

//----------------------------
//after that now hm jo bhi changes krege krke save krege bo automatoically change honge without restart the server
// console.log('hi finally me connect ho gya')

// app.listen(8080 , ()=>{  
//     console.log('server is connected at port number 8080 finally me connect ho gya')
    
// })
//hi finally me connect ho gya
//server is connected at port number 8080 finally me connect ho gya


//---------------------------
//app.use ->its a method of application and we call this method as a middleware or middleware is a function which will run on every incoming request-> like / ,/sam ,/dog and /sam/cat ye req. hm browser/server pr krte hai then hme responce milta hai

//app.use([path,] callback [, callback...]) -> it accept an path (optional) and callback fun


// app.use( function(){
//     console.log('you made a request')
// })

// app.listen(8080 , ()=>{  
//     console.log('server is connected at port number 8080')   
// })

//now open browser and send the any request  like / ,/sam,/goutam  everytime print ->you made a request on cmd when you do req. from server
//ex-> http://localhost:8080/sam/goutam  , //http://localhost:8080/sam , //http://localhost:8080/ , 

//Note:first time by default first time req. / jati hai to ek baar print hoga->you made a request 

//Note: jb bhi hm req. bhejte hai tb browser reload hota hai and This site can’t be reached ye msg milta hai server se hme bcz hmne abi koi responce nhi bheja hai isliye
//bcz server hm hi hai to hm hi responce send krege

//-----------------------------
//req and res is an object jb bhi hm server pr req / res send krte hai tb dono ka object milta hai

app.use( function(req,res){  
    console.log('you made a request')
    //console.log(req)  //it returns an masive object ->ServerRequest //->you made a request
    //console.log(req)    //it also returns an masive object name is ->ServerResponse  //-> but no responce bcz we didnt send responce yet
    
   // res.send('hi server ne responce de diya')
    res.send('<h1>hi finally server ne responce de diya</h1>')

})

app.listen(8080 , ()=>{  
    console.log('server is connected at port number 8080')   
})

//http://localhost:8080/goutam  -> hi server ne responce de diya
//http://localhost:8080/  -> hi server ne responce de diya
//http://localhost:8080/goutam/gurjar -> same result 

//Note:means kitni bhi req. bhejo responce ek hi milega




//---------------------------
//Note: ydi kise other ka project run krna ho to uske liye aapko
//npm init  then npm start cmd ka use krna pdega then aap us project ko run kr skte ho

