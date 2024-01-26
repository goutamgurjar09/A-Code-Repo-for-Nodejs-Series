console.log(process.cwd())
console.log(__dirname)

//both gives same path output 
// PS C:\Users\HP\Desktop\node\Lec-2> node more-about-node.js

// PS C:\Users\HP\Desktop\node\Lec-2\more-about-node> node index.js
// C:\Users\HP\Desktop\node\Lec-2\more-about-node
// C:\Users\HP\Desktop\node\Lec-2\more-about-node 


//but one diff. between both
//means hm Lec-2 folder se bhi index.js ko chla skte hai isme hme cwd jo ki current dir-> C:\Users\HP\Desktop\node\Lec-2 dega
//and __dirname jo ki ->C:\Users\HP\Desktop\node\Lec-2\more-about-node jis folder me aapki index.js file/project file hai bo path dega

//let's see
//PS C:\Users\HP\Desktop\node\Lec-2\more-about-node> cd..
// PS C:\Users\HP\Desktop\node\Lec-2> node more-about-node/index.js
// C:\Users\HP\Desktop\node\Lec-2
// C:\Users\HP\Desktop\node\Lec-2\more-about-node

//cwd -> current working directory => means current me aap kha khde/par ho jo ki change hoti rhti hai
//__dirname -> project means (file name)kha se chlna hai jo ki change nhi hoti hai