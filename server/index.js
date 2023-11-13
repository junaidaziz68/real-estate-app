import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv';

dotenv.config();

// creating databse connection here 
mongoose.connect(process.env.db).then(()=>{
    console.log('connection succesfull')
})
.catch((err)=>{
    console.log(err);
})
// main config to setup server
const app = express()
// allows us to view json request from server 
app.use(express.json());
const port = 3000

app.use('/server/user',userRouter);
app.use('/server/auth',authRouter)

//creating middleware for error 
app.use((err,req,res,next)=>{
const statusCode=err.statusCode || 500;
const message = err.message || 'internal server error'
return res.status(statusCode).json({
    sucess:false,
    statusCode,
    message,
})
})

app.listen(port,()=>{
console.log(`App running on port ${port}`)
})
