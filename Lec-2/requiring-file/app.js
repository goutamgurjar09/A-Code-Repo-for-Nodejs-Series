//let getdata = require('./index');//jb ise require krte hai tb ye(index.js) automatically run hoti hai

//console.log(getdata) ////object -> destructure?

// 3.145
// 25
// 7
// { pi: 3.145, ans1: [Function: ans1], ans2: [Function: ans2] }

//bcz getdata is an object and obj se property  access (.dot) use krke krte hai
// console.log(getdata.pi)
// console.log(getdata.ans1(7))
// console.log(getdata.ans2(4,5))


// 3.145
// 25
// 7
// { pi: 3.145, ans1: [Function: ans1], ans2: [Function: ans2] }
// 3.145
// 49
// 9

//how to destructure object
//let getdata = require('./index');//
//let {pi,ans1,ans2} = getdata; 
// let {pi,ans1,ans2} = require('./index');
// console.log(pi)
// console.log(ans1(7))
// console.log(ans2(4,5))

// 3.145
// 25
// 7
// 3.145
// 49
// 9

//note-> {pi,ans1,ans2} ->its all  the key of  which define index.js->in module.exports object

// let {pII,ans1,ans2} = require('./index');

// console.log(pII)
// console.log(ans1(7))
// console.log(ans2(4,5))

 
//let {pII:hello,ans1,ans2} = require('./index'); //another name destructure
//console.log(hello);


// -------------------------------

let naam = require('./index');

console.log(naam);

// 3.145
// 25    
// 7     
// goutam