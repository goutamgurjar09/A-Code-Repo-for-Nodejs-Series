//bcz routes bnane ke liye express ki need hoti hai
const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateProduct } = require('../middleware');
 

const router = express.Router() ;//mini application ->means jo kaam hmara app.get/app.post/app.listen... krta tha index.js me bhi same kaam->express.Router()  krega      ->app ko  hm ek jgh se dusri jgh exports nhi kr skte bcz ye app to puri ki puri application hoti hai



//First see restful architecture table use ke according hm task kr rhe
//1.read
router.get('/products',async(req,res)=>{  
   try{   
    let products = await Product.find({})                    //jitne bhi mongoose ke methods hai bo ek promise return krte hai isliye hm async and await ka use krte hai
    res.render('index',{products})  //index.ejs page pr sabhi products ko render kr do
   }
   catch(e){
        // If an error occurs, render the 'error' page with the error information
    res.render('error',{err:e})//e.message
    }

})

//2. create new form in new.ejs and show it
router.get('/products/new',(req,res)=>{
    try{
        res.render('new');
    }
    catch{
        res.render('error',{err:e})//e.message
    }
})

//3. Add new products to database then redirect
router.post('/products',validateProduct,async(req,res)=>{  //so that product add hone se phle chack kr le ki validateProduct hai ya nhi
    try{
        let {name,img,price,desc} = req.body; //by default undefined  //then form data ko dekhne ke liye index.js me ek middleware use krege  ->app.use(express.urlencoded({extended:true})) 
        await Product.create({name,img,price,desc});  //create()  automatically Product save in DB     //for createing a new product using form and it returns a promise
        res.redirect('/products');
    }
    catch(e){
        res.render('error',{err:e})//e.message

    }
})

//4. show perticuler/one product

router.get('/products/:id',async(req,res)=>{
   try{
    let {id} = req.params;        //to get product id
    // let foundProduct= await Product.findById(id)   //its a mongodb method i will returns a promise  and hme id ke through Product ko find krna hai isliye use kiya
     let foundProduct= await Product.findById(id).populate('reviews'); //populate dusre collection se data lake dega and Populate hm  ->Product ke ander reviews ke basis pr krege so that reviews ke ander hr ek ki objectID ke hisab se data lake de  and hm iske through Star rating de payege -> see Product.js 
     console.log(foundProduct) 
     res.render('show',{foundProduct})   //show page pr hmne pura Product ko render/bhej diya
   }
   catch(e){
    res.render('error',{err:e})//e.message
   }
})


//Show edit form

router.get('/products/:id/edit',async(req,res)=>{
  
  try{
    let {id} = req.params;        //to get product id
    let foundProduct= await Product.findById(id)  
    res.render('edit',{foundProduct})   //edit page pr hmne pura Product ko render/bhej diya
  }
  catch(e){
    res.render('error',{err:e})//e.message
  }

})

//then actually Update a perticuler product and redirect it
router.patch('/products/:id/',validateProduct,async(req,res)=>{
    try{
        let {id} = req.params;        //to get product id
        let {name,img,price,desc} = req.body; //by default undefined   //bcz hmne post req. ke through form bhra hai to hmare pass data req.body me aayega //see edit .js
        await Product.findByIdAndUpdate(id, {name,img,price,desc})   //id ko find krke  -> pure object/Product ko update kro->{name,img,price,decs}
        res.redirect('/products')
    }
    catch(e){
        res.render('error',{err:e})//e.message
    }
    
})


//To actually delete a perticuler product then redirect it
router.delete('/products/:id/',async(req,res)=>{
   try{
    let {id} = req.params;        //to get product id
    let foundProduct= await Product.findById(id)   
    for(let reviewsid of foundProduct.reviews){    //product ko delete krne se phle sare reviews ko delete krege then Product ko
        await Review.findByIdAndDelete(reviewsid)
    }
    await Product.findByIdAndDelete(id) 
    res.redirect('/products')
   }
   catch(e){
    res.render('error',{err:e})//e.message
   }
})


module.exports = router;  //then we need to require this module in index.js