const mongoose = require('mongoose') //object

//Schema

// const riviewSchema = new mongoose .Schema({//Schema always ek object accept krta hai
//    rating:{
//      type:Number,
//      min:0,
//      max:5
//    },
//    comment:{
//     type:String,
//     trim:true
//    }

// })
const riviewSchema = new mongoose .Schema({//Schema always ek object accept krta hai
  rating:{
    type:Number,
    min:0,
    max:5
  },
  comment:{
   type:String,
   trim:true
  }

},{timestamps : true})
let Review = mongoose.model('Review',riviewSchema) //(modelName,schema)      //let Product  isko hm hmare project me use krege means hmara module iske ander store hai

module.exports = Review;