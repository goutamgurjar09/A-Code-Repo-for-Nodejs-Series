const express = require('express')
const app = express()            //app is an instance isko hm ek jgh se dusri jgh exports nhi kr skte bcz ye app -> puri ki puri application hoti hai
const path = require('path')
const seedDB = require('./seed')  //line-21 me call kr rhe
const productRoutes = require('./routes/product')
const methodOverride = require('method-override')

app.set('view engine' , 'ejs')
app.set('views',path.join(__dirname , 'views'))  //views ka folder path.join se set hota hai and path hme __dirname se milta hai 
app.use(express.static(path.join(__dirname, 'public')))  //static folder ke liye hm middleware ka use krte hai

app.use(express.urlencoded({extended:true}))  // form data body parser for post method()
app.use(methodOverride('_method'))

//DB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //this connect method returns a promise
.then( ()=>{
    console.log("Db connected")
})
.catch( (error)=>{
    console.log("error is:",error)
})

//seedDB() //if not commented baar-baar store ho jayega Product data  ek baar project run krke comment kr do

app.use(productRoutes) //productRoutes ko ek middleware me pass krege bcz ye hr ek incoming req. pr chl skta hai isliye

const port = 8080;
app.listen(port,(req,res)=>{
    console.log(`server connected ${port}`)
})

//This is the all process
//All steps that we are going to perform
//1.Basic server
//2.mongoose connection
//3.created model and seed data


//Ater connection open cmd and check it DB create hua ya nhi?

// test> show dbs
// admin      48.00 KiB
// config     72.00 KiB
// hotel      72.00 KiB
// julybatch   8.00 KiB
// local      72.00 KiB
// person     40.00 KiB
// test> use julybatch
// switched to db julybatch
// julybatch> show collections
// products                   //DB me Product modulename -> products  means small later and plural form me bn jata hai  see Product.js file


//Then require and call seedDB() and run this cmd -> db.products.find()   seed.js  me  jo bhi data hoga bo DB collection(products) me store ho jayega
// julybatch> db.products.find()
// [
//   {
//     _id: ObjectId('65a026a9349399d87fde75eb'),
//     name: 'iphone 15pro',
//     img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZSUyMDE1cHJvfGVufDB8fDB8fHww',
//     price: 124000,
//     desc: 'very costly phone',
//     __v: 0
//   },
//   {
//     _id: ObjectId('65a026a9349399d87fde75ec'),
//     name: 'mackBook pro',
//     img: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     price: 100000,
//     desc: 'wow so nice pc',
//     __v: 0
//   },
//   {
//     _id: ObjectId('65a026a9349399d87fde75ed'),
//     name: 'one plus',
//     img: 'https://images.unsplash.com/photo-1673718424091-5fb734062c05?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     price: 50000,
//     desc: 'very chip and nice phone',
//     __v: 0
//   }
// ]


//4. create routes -> and add them views

