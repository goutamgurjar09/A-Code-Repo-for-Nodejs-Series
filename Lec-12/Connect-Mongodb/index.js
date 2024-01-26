const express = require('express');

const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/person"); // Corrected connection string

const { Schema } = mongoose;

const studentSchema = new Schema({ // Corrected schema name to studentSchema
  name: String,
  rollNo: Number
});

const Student = mongoose.model("Student", studentSchema); // Corrected model name to Student
let student1 = new Student({ name: "ram", rollNo: 1 });
student1.save();


app.listen(8080, (req,res)=>{
    console.log("server connected ")
})