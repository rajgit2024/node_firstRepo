const mongoose=require('mongoose');

//Define the person Schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:["chef","waiter","manager"]        
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    usename:{
        require:true,
        type:String
    },
    password:{
        type:String,
        required:true
    }
})