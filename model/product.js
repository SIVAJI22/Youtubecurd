const mongoose= require('mongoose')
const  multer=require('multer')
const videoSchema=mongoose.Schema(
    { videos:String,
    },
    {
        Description:String
        
     },
        
        {
            collection:"Videos",
        },

   

  
  

);
const videos=mongoose.model('Videos',videoSchema)
module.exports=videos;