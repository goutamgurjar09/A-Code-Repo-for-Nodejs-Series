//when we do server side validation/jb bhi apko apne data ko validate krna hota hai then we use JOI package ->  https://joi.dev/api/?v=17.9.1

//how we can use this  ?

//1. we need to create/define  schema for that means joi ka use krke->Productschema  and Reviewschema
//2. then jo bhi joi ki help se schema bnaya usko validate means  joi ko validate krna

const joi = require('joi');
const productschema = joi.object({
    name:joi.string().required().trim(),
    img:joi.string().required(),
    price:joi.number().min(0).required(),
    desc:joi.string().trim()
})

const reviewschema = joi.object({
      rating:joi.number().min(0).max(5),
      comment:joi.string().trim()
})

module.exports = {productschema , reviewschema}