//bcz routes bnane ke liye express ki need hoti hai
const express = require('express');
const Product = require('../models/Product');
const router = express.Router() ;//mini application ->means jo kaam hmara app.get/app.post/app.listen... krta tha index.js me bhi same kaam->router  krega      ->app ko  hm ek jgh se dusri jgh exports nhi kr skte bcz ye app to puri ki puri application hoti hai



 


//First see Restful architecture table use ke according hm task kr rhe
//1.Read/Display all products
router.get('/products',async(req,res)=>{   
   let products = await Product.find({})                    //jitne bhi mongoose ke methods hai bo ek promise return krte hai isliye hm async and await ka use krte hai
   res.render('index',{products})  //index.ejs page pr sabhi products ko render kr do
})

//2. create new form in new.ejs and show it
router.get('/products/new',(req,res)=>{
     res.render('new');
})

//3. Add new products to database then redirect
router.post('/products',async(req,res)=>{
    // console.log(req.body)
    // res.send(req.body)
    let {name,img,price,desc} = req.body; //by default undefined  //then form data ko dekhne ke liye index.js me ek middleware use krege  ->app.use(express.urlencoded({extended:true})) 
    await Product.create({name,img,price,desc});  //create()  automatically Product save in DB     //for createing a new product using form and it returns a promise
    res.redirect('/products');
})

//4. show perticuler/one product

router.get('/products/:id',async(req,res)=>{
    let {id} = req.params;        //to get product id
    let foundProduct= await Product.findById(id)   //its a mongodb method it will returns a promise  and hme id ke through Product ko find krna hai isliye use kiya
    res.render('show',{foundProduct})   //show page pr hmne pura Product ko render/bhej diya
})

//Show edit form

router.get('/products/:id/edit',async(req,res)=>{
    let {id} = req.params;        //to get product id
    let foundProduct= await Product.findById(id)  
    res.render('edit',{foundProduct})   //edit page pr hmne pura Product ko render/bhej diya
})

//then actually Update a perticuler product when we click edit this btn and redirect it
router.patch('/products/:id/',async(req,res)=>{
    let {id} = req.params;        //to get product id
    let {name,img,price,desc} = req.body; //by default undefined   //bcz hmne post req. ke through form bhra hai to hmare pass data req.body me aayega //see edit .js
    await Product.findByIdAndUpdate(id, {name,img,price,desc})   //id ko find krke  -> pure object/Product ko update kro->{name,img,price,decs}
    res.redirect('/products')
})


//To actually delete a perticuler product then redirect it
router.delete('/products/:id/',async(req,res)=>{
    let {id} = req.params;        //to get product id
    let {name,img,price,desc} = req.body;     // see index.ejs  
    await Product.findByIdAndDelete(id, {name,img,price,desc})   //id ko find krke  -> pure object/Product ko delete kro->{name,img,price,decs}
    res.redirect('/products')
})


module.exports = router;  //then we need to require this module in index.js