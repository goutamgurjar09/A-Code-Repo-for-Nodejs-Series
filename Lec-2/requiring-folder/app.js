// let janwer = require('./animal') //folder
// console.log(janwer)
//{} it returns an empty object

//note: ydi hm animal folder ko require kr rhe hai tb bo hme by default  ek empty object dega
//jo bhi index.js file me se export ho rha phle empty obj tha
//then  ab hmne ek string ko export kiya index.js se tb ye hme-> goutam gurjar dega means jo  bhi aap export kroge
//module.exports = "goutam gurjar"

//before
// PS C:\Users\HP\Desktop\node\lec-2\requiring-folder> node app.js
// {}

//now
// PS C:\Users\HP\Desktop\node\lec-2\requiring-folder> node app.js
// goutam gurjar

// whenever you require anyfolder then the index.js file inside that folder is resposible for the export of it
//note: remember you must have index.js file  ydi aap  name change kroge iska to error dega

//{ cat: { cat: [Function: cat] }, dog: { dog: [Function: dog] } }


//----------------
//let {cat,dog} = janwer

//let {cat,dog} = require('./animal')
let {cat:catty,dog:doggy} = require('./animal')
// console.log(cat)
// console.log(dog)

//ye bhi ek object de rhe bcz aap 2 object ko bhej rhe means ek level or ander jana pdega
// { cat: [Function: cat] }
// { dog: [Function: dog] }


// console.log(cat.cat())
// console.log(dog.dog())


console.log(catty.cat())
console.log(doggy.dog())
// meouw meouw
// undefined
// woof woof
// undefined