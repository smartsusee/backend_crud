const mongoose =require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken') 
const data_schema =require('../schema');
const errorhandling = require("./middleware/error");


const post_data =async(req,res,next)=>{

    const hasspassword =await bcrypt.hash(req.body.password,7)

    const data = new  data_schema({

...req.body,password:hasspassword

    })

    

    
     const ExitEmail = await data_schema.findOne({email:req.body.email})

     if(ExitEmail) return next(errorhandling("",""))

    const save_data =await data.save()
    res.json(save_data)

}


const Get =async(req,res)=>{


  const view = await data_schema.find({});

 res.json(view)

}

const Update =async(req,res)=>{

  const update = await data_schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}) 
    
     res.json(update)
}


const Del =async(req,res)=>{

  const del = await data_schema.findByIdAndDelete(req.params.id)
  
  res.json("delete successfull")
}   

const Login = async(req,res)=>{

   const useremail =await data_schema.findOne({email:req.body.email})

   if(!useremail) return res.json("email not valid")


    const userpassword = await bcrypt.compare(req.body.password,useremail.password)

      if(!userpassword) return res.json("password not valid")  
      
    //   res.json("login success")
         
   const token = jwt.sign({id:useremail._id},process.env.TOKEN) 

      res.json({token_1:token, msg:"!login success" })

} 




module.exports={post_data,Login,Get,Update,Del}