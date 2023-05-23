const express = require('express')

const app =express();

const dotenv =require('dotenv')


dotenv.config()
 

const mongoose =require('mongoose');
const router = require('./module/controller/router/router');
// const cookieParser = require('cookie-parser');

mongoose.connect(process.env.DB)

.then(()=>{


    console.log("db is connected");
})

.catch(()=>{

    console.log("db is not connected");

})


// app.use(cookieParser())
app.use(express.json())
app.use("/api",router)

app.use((err,req,res,next)=>{
    const errstatus =err.status||500;
    const errmessage = err.message||"somthing went wrong "
    return res.status(errstatus).json({status:errstatus,message:errmessage})
})

app.listen(process.env.PORT,()=>{

   console.log("server runing Port:",process.env.PORT);



})