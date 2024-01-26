let cat = require('./cat.js')//cat and dog.js se exportkrke yha pr dono file ko require kr liya
let dog = require('./dog.js')

module.exports = {} //by default empty obj
module.exports = "goutam gurjar"


module.exports = {cat,dog}
//{ cat: { cat: [Function: cat] }, dog: { dog: [Function: dog] } }