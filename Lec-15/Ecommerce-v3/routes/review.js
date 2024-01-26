const express = require('express');
const Product  = require('../models/Product');
const Review = require('../models/Review');
const { validateReview } = require('../middleware');
const router = express.Router() ;//mini application 


router.post('/products/:id/rating',validateReview,async(req,res)=>{
    // console.log(req.body)
    // res.send(req.body) //send to server and see on browser ->{ rating: '3', comment: 'wahhh guru ky quality hai' }
    try{
        let {rating,comment} = req.body;
        let {id} = req.params;
        let product = await Product.findById(id)  //first find product by id
        //then Create new review 
        let review  = new Review({rating,comment}); //yha hme class syntax ke through new review create kiya
        product.reviews.push(review);  //then new review ko puch krege  -> Product.js  me Product ke inside-> product.reviews->  jo ki ek array hai
        await product.save();     //then Both save/store into DB  ->save() is a mongodb method thatswhy we use await
        await review.save();
        res.redirect(`/products/${id}`)
    }
    catch(e){
        res.render('error',{err:e})//e.message
    }

})

//then go on browser and write review   and open cmd and see this on DB 
// test> use julybatch
// switched to db julybatch
// julybatch> show collections
// products
// reviews
// julybatch> db.reviews.find()
// [
//   {
//     _id: ObjectId('65a4e377378a63d5176553af'),
//     rating: 3,
//     comment: 'hy ji kkk',
//     __v: 0
//   },
// ]
//then run and see objectId in reviews
//julybatch> db.products.find()




module.exports = router;  
