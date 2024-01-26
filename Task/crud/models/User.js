const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img:{
        type: String,
        trim: true
    }
});

// Correct the model name to 'User'
let User = mongoose.model('User', userSchema);


module.exports = User;
