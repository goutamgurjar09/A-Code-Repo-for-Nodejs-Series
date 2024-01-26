let {productschema , reviewschema} = require('./joi-Schema');

let validateProduct = (req,res,next)=>{  //validateProduct and validateReview both are middleware
    let {name,img,price,desc} = req.body;//jb bhi product.js se router.post req. jayegi /products pr to hmare pass req.body ka access rhega
    const {error} = productschema.validate({name,img,price,desc});   //productschema  ko validate krege  in properties ke sath->{name,img,price,desc}   to hme ya to {error,value} milegi but hme value nhi chahiye
    if(error) { //if error mila then ->see https://joi.dev/api/?v=17.9.1#errors
      const msg = error.details.map( (err)=>err.message).join(',');  //erroe ke ander jo details array hai usse hm sare error dekh skte hai and details ke ander bhi err milega to ->return err.message
      return res.render('error', {err:msg}); //object ke form me bhej denge ki jo error hai bo msg ke form me hai ->{err:msg}
    }
    next();  //and error nhi aaya to next() middleware ko call kr dege
}

//smae kaam hm validateReview ke liye bhi krege once see review.js
let validateReview = (req,res,next)=>{
    let {rating,comment} = req.body;
    const {error} = reviewschema.validate({rating,comment});  
    if(error) { 
        const msg = error.details.map( (err)=>err.message).join(',');  
        return res.render('error', {err:msg}); 
    }
    next(); 

}

//Then go on http://localhost:8080/products/new  add peorduct and price /name mt likhna then hme ek error milegi
module.exports = {validateProduct , validateReview}