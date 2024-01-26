const express = require('express')
const app = express()

//const path = require('path')


app.use(express.json())  //json middaleware -> iske through hme  data milega jb bhi hm post req. se send krege bcz hm postman se json data send kr rhe 
app.get('/' , (req,res)=>{
    res.send('hello goutam sir')
})

app.post('/',(req,res)=>{
    const dt = req.body  //post method se jo bhi data/responce molta hai means  jo bhi users data server ko send krta hai hme bo req.body me milta hai   but abi hm ye data postman ke through send kr rhe  ->data { firstname: 'Lional', lastname: 'Messy' }
    console.log('data',dt)
    res.send('Posting data successfuly yeah')
})

app.listen(8080,()=>{
    console.log('server connectedc')
})

// get-> query parameter
// post-> req.body