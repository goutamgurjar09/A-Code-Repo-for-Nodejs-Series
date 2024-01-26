const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

//-----------------
// Db connection
mongoose.connect("mongodb://127.0.0.1:27017/user")
    .then(() => {
        console.log("Db connected");
    })
    .catch((err) => {
        console.log("error is:", err);
    });

//------------------    
// Storage object for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

//--------------------------
app.get('/users',async(req,res)=>{
    try{
        let usersDetails = await User.find({}); 
        res.render('index',{usersDetails});
    }
    catch(error){
        console.log(error);
    }
})
//-----------------------
app.get('/users/new',(req,res)=>{
    try{
        res.render('new');
    }
    catch(error){
        console.log(error);
    }
})
//----------------------
app.post('/users', upload.single('img'), async (req, res) => {
    try {
        console.log(req.file);
        const { name } = req.body;
        const fileName = req.file.filename;

        await User.create({ name: name, img: fileName });
        res.redirect('/users');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




app.listen(8080, () => {
    console.log('server is connected at port number 8080');
});






