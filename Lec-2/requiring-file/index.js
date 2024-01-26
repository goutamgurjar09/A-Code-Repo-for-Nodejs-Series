const pi = 3.145;

// const ans1 = (num) =>{
//    return num*num;
// }

//or

const ans1 = (num) => num*num;
const ans2 = (a,b) => a+b;

console.log(pi)
console.log(ans1(5))
console.log(ans2(3,4))

// PS C:\Users\HP\Desktop\node\Lec-2\requiring-file> node app.js
// 3.145
// 25
// 7 
// {}  -> empty object

//when you don't export/bhejna anything from your index.js/file by default empty object is being sent 
//when you run app.js file

//use module to sent anything

//module.exports = {} //by default empty object

//module.exports = {}->ise likhe ya na likhe by default empty object sent hoga



//lets see if i want sent something to app.js file-> module.exports this is an object

// module.exports = {
//     pie : pi,
//     ans1 : ans1,
//     ans2 : ans2
// }
// PS C:\Users\HP\Desktop\node\Lec-2\requiring-file> node app.js
// 3.145
// 25
// 7 
// { pie: 3.145, ans1: [Function: ans1], ans2: [Function: ans2] }


//js khta hai ki if my key and value are the ame then i can ignore/remove writing my (: value) part
// module.exports = {
//     pi ,
//     ans1 ,
//     ans2
// }

// module.exports = {
//     pII : pi, //bczits diff key val
//     ans1 ,
//     ans2
// }


module.exports = "goutam"

//but generally hm object behjte hai module.exports me 
//aap kuch bhi bhej skte hai