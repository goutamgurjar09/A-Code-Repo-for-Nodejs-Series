const express = require('express')
const app = express()

const path = require('path')

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views')) //means views  folder me  __dirname ko join kr diya  path.join() ke through

//use static files with middleware bcz hme hr ek incoming req. pr static files use krna hai means jb bhi hm server se req. krte hai to bo hme responce deta hai req. ke according to usme-> static files like css,js,image,media files ye sb apply/serve hoti hai jo ki sbhi pages/req. ke liye same rhti hai
app.use(express.static(path.join(__dirname , 'public'))) //->public is a static files folder name jo hr ek incomin req. ke liye serve hoti hai


//create a route and render/show the whatever page with static files
//---------------------------
app.get('/whatever',(req,res)=>{
     res.render('whatever')
} )


//create a new route and render/show the horror page with static files

//-------------------------
app.get('/horror',(req,res)=>{
    res.render('horror')
} )



//--------------
//Note:
//and now i want that our header and footer part to same hota hai every page me
//to hm dono part ko header and footer ko ek alg folder create krke usme alg alg dono ki file bnakr rkh denge
//hmne views ke ander partials name se folder create kiya and uske ander two files create ki header and footer.ejs and dono ko rkh diya

let PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server connected at: ${PORT}`)
})
