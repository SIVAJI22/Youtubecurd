const  express = require('express')
const  router=express.Router();
const VIDEO= require('../model/product')
const multer=require('multer');

// const m= require("http://localhost:3000/src/Images")


router.post('/U',async (req,res)=>{
    try{
    
      
        const newImage = await new VIDEO (req.body)
        console.log(req.body.Description);
       
        newImage.save().then(()=> res.send('successfully uploaded')).catch((err)=>console.log(err))

    }catch(e){
res.json({status:e})
    }
   
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "..frontend2/src/Videos")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix +file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/uploadvideo',upload.single('videos'),async function (req,res){
    console.log(req.body);
    
 // add a property

    const  Videoname=req.file.filename

  const desc=req.body.Description
//    const d= desc.toString()


    try{
         await VIDEO.create({  videos:Videoname ,  Description:desc
          } )

res.json({status:"ok"})
    }
    catch(err){
console.log(err);
res.json({status:err,
message:"failed"
})

    }
})
// router.get("/imageget:id", async function (req, res) {
//   try {
//     let data = await IMAGE.findById(req.params.id, req.body);
//     res.json({
//       status: "success",
//       data: data,
//     });
//   } catch (err) {
//     res.json({
//       status: "error",
//       message: err,
//     });
//   }
// });


router.get('/videoget', async  (req,res)=>{
try{
  await VIDEO.find().then((data)=>{
    res.send({status:'ok',data:data});
  })
}
catch(err){
res.send({
  status: err,
  message:'failed'})
}
})
//////getid/////


//// update///////////
router.get("/updating:getid", async function (req, res) {
  try {
    let data = await VIDEO.findById(req.params.getid, req.body);
    res.json({
      status:data,
      message:'success'
    })
  }catch(e){
res.json('error')
  }


})
  // update------------->
  router.put("/:update", async function (req, res) {
    try {
      await VIDEO.findByIdAndUpdate(req.params.update, req.body);
      res.json({
        status: "this user updated successfully",
      });
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });
  //delete------------->

  router.delete("/D:delete", async function (req, res) {
    try {
      await VIDEO.findByIdAndDelete(req.params.delete, req.body);
      res.json({
        status: "success",
      });
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });
module.exports=router;
