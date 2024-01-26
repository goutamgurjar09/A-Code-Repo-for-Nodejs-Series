//seed.js se Products ko hm database me dalege  means assume hmare pass 4-5 product hai and inko hme ek sath bhejna hai apne DB ke ander to hm ise seeding bolte hai
const mongoose = require('mongoose') //object
const Product = require('./models/Product')

const products =[
    {
        name: "iphone 15pro",
        img:"https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZSUyMDE1cHJvfGVufDB8fDB8fHww",
        price:124000,
        desc:"very costly phone"
    },
    {
        name: "mackBook pro",
        img:"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:100000,
        desc:"wow so nice pc"  
    },
    {
        name: "one plus",
        img:"https://images.unsplash.com/photo-1673718424091-5fb734062c05?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:50000,
        desc:"very chip and nice phone"
    },
    
]


async function seedDB(){
   await Product.insertMany(products)//seedDB-> insert array of obj in DB means Product name ki collection ye sare products ko add kr dega  and ye insertMany returns krta hai jo ek promise isliye async and await ki help se inhe resolve krte hai
   console.log("DB seeded")
}
module.exports = seedDB  //so that hm ise dusre jgh istemaal kr ske ->see index.js



//after that open cmd and check it?

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
// products
