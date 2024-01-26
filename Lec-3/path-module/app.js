let path = require('path')//object

//let ans = path.join('goutam','gurjar') //it will covert to ->goutam\gurjar   PS C:\Users\HP\Desktop\node\Lec-3\path-module> node app.js        

//let ans = path.join('samarth' , 'vohra');

// let ans = path.join('i' , 'am' , 'not' , 'teaching' , 'i am' , 'playing'); 


//let ans = path.join('i//' , '//am//' , '//not//' , '//teaching//' , '//i am//' , '//playing');//i\am\not\teaching\i am\playing  -> path.join jitne bhi extra slash / hai unko ignore krke single slach me convert kr deta hai

let ans = path.join('i//' , '//' , '//' , '//am//' , '//not//' , '//teaching//' , '//i am//' , '//playing'); //same 

console.log(ans) 