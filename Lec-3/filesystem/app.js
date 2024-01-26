const fs = require('fs');//object

let data = "my name is goutam thanks alot";


//-------------------
// create -> writeFile()

//it except 4 argument
// fs.writeFile('abc.txt',data ,{}, ()=> {})

// fs.writeFile('abc.txt',data ,
// {//optional part

//     encoding:'utf-8',
//     flag:'w'

// }, 
// (err)=> {
//    if(err) {throw err} 
//    console.log('file written successfully')
// })
//run and  see abc.txt file

// PS C:\Users\HP\Desktop\node\Lec-3\filesystem> node app.js
// file written successfully


//------------------

// read -> readFile()
//3 arguments

// fs.readFile('def.txt',{}, ()=> {})

// fs.readFile('def.txt' , {},
   
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data); //this will return buffer DATA  (means kuch bhi jo smjh na aaye not readable)  if you run without optional part bcz encoding  convert this data to strings -> encoding:"utf-8"
//     } 
// )

//PS C:\Users\HP\Desktop\node\lec-3\filesystem> node app.js
//         //<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 72 65 61 6c 6c 79 20 67 6f 75 74 61 6d 20 20 67 75 72 6a 61 
// //72 20 69 20 64 6f 6e 74 20 6b 6e 6f 77 20 62 65 ... 4 more bytes> 



// --step-1 to improve--

// fs.readFile('def.txt' , 
//     {
//         encoding:"utf-8",
//         flag:'r'
//     } , 
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data); //buffer->string
//     } 
// )
//hello this is really goutam  gurjar i dont know before

//step 2

//-----------
// fs.readFile('def.txt' , 
     
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data.toString()); //buffer->string
//     } 
// )
//hello this is really goutam  gurjar i dont know before


//----------------
// update -> appendFile()

// fs.appendFile('abc.txt',' bhoukaliBaba' ,{},

// (err)=>{
//     if(err) {throw err}
//     console.log("file edited successfully")
// })


//delete -> unlink()

fs.unlink('pqr.txt',

(err)=>{
    if(err) {throw err}
    console.log("file deleted successfully")
    
})