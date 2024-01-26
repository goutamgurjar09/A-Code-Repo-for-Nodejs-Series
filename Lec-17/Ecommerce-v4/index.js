const express = require('express')
const app = express()            //instance isko hm ek jgh se dusri jgh exports nhi kr skte bcz ye app to puri ki puri application hoti hai
const path = require('path')
const seedDB = require('./seed')  //line-21 me call kr rhe
const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const authRoutes = require('./routes/auth');


let configSession ={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}

app.set('view engine' , 'ejs')
app.set('views',path.join(__dirname , 'views'))  //views ka folder path.join se set hota hai and path hme __dirname se milta hai 
app.use(express.static(path.join(__dirname, 'public')))  //static folder ko hm middleware ka use krte hai

app.use(express.urlencoded({extended:true}))  //for form data body parser 
app.use(methodOverride('_method'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //this connect method returns a promise
.then( ()=>{
    console.log("Db connected")
})
.catch( (error)=>{
    console.log("error is:",error)
})

//seedDB() //if not commented baar-baar store ho jayega   ek baar project run krke comment kr do



app.use(session(configSession));
app.use(flash());  //then go on review.js

app.use( (req,res,next)=>{   //go on product.js then flash.ejs
    res.locals.success = req.flash('success'); //req ke flash ke ander seccess key se jo bhi msg mile use ->res.locals.success   isme store kr do
    res.locals.error = req.flash('error');
    next();
})

app.use(productRoutes); //productRoutes ko ek middleware me pass krege bcz ye hr ek incoming req. pr chl skta hai isliye
app.use(reviewRoutes);
app.use(authRoutes);






app.listen(8080,()=>{
    console.log("server connected")
})






//This is the all process
//All steps that we are going to perform
//1.Basic server
//2.mongoose connection
//3.created model and seed data
//4. create routes -> and add them views
//5. create Review Schema  and add it in Product schema  ->Then create form to add the rating and comment  in show.ejs
//6.Add validation
