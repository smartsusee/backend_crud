const mongoose =require('mongoose');


const data_schema = mongoose.Schema({



    name:{
   
        type:String,
        required:true


    },


    email:{

        type:String,
        required:true

    },


    password:{
        type:String,
        required:true

    }

},{timestamps:true})

module.exports =mongoose.model("jwt_data",data_schema)
