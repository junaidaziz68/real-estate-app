import mongoose, { Schema } from 'mongoose';
//creating schema using mongoose.schema 

const userSchema =  new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true})

// creating models using mongoose.model method


const User = mongoose.model('User',userSchema)


export default User;
 