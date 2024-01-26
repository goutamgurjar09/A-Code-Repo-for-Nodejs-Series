const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        min: 0,  // Corrected from 'mon' to 'min'
        required: true
    },
    desc: {
        type: String,
        trim: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;



//----------------------------------------

// //model bnane ke liye hme mongoose ko require krna pdega bcz hm model ko ise ki help se create krte hai see index.js
// const mongoose = require('mongoose') //object

// //Schema
// //const { Schema } = mongoose;  -> mongoose ke ander se Schema ko destructure kiya    isko hm ese bhi likh skte hai ->new mongoose .Schema({})

// const productSchema = new mongoose .Schema({//Schema always ek object accept krta hai
//     name:{             
//       type:String,
//       trim:true,       //remove spaces
//       required:true    //name should be mendetory
//     },
//     img:{
//         type:String,
//         trim:true,   
//     },
  // price: {
  //   type: Number,
  //   min: 0,   
  //   required: true
  // },
//     desc:{
//         type:String,
//         trim:true
//     },
//     reviews:[
//       {
//         type:mongoose.Schema.Types.ObjectId,  //iska mtlb hey mongoose review Schema me jake uska Type jo hai bcz usme bhot  sare Types hoge uski sirf or sirf ObjectId lake de   
//         ref:'Review'    //Review-> this is the Model name   bcz ise btana pdega ki ye ObjectId kis model se hai bcz model name kuch bhi ho skta hai isliye ise pta nhi hoga 
//       }                 //After that go on show.ejs  and create a form bcz hme ye rating and comment  bha dikhana hai 
//     ]

    

// })

// //Model/Collection -> its a JS class and class se object/document bnte hai
// //Modelname always starts with capital latter and always be singuler-> Product     not ->Products
// let Product = mongoose.model('Product',productSchema) //(modelName,schema)      //let Product  isko hm hmare project me use krege means hmara module iske ander store hai

// module.exports = Product; //so that hm is module ko dusri file me use kr paye ->index.js ....