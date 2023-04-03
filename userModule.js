const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    mobile:{
        type :String,
        required:true,
        unique:true

    },
    DOB:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }



},{timestamps:true})

module.exports = mongoose.model('User',userModel)