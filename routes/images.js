const  express = require('express')
const  router=express.Router();
const IMAGE = require('../model/images')
const multer=require('multer');


// const m= require("http://localhost:3000/src/Images")


router.post('/u',(req,res)=>{
    res.json('hhhhhhiiiiiiii')
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../frontend2/src/Images")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix +file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/uploadimage',upload.single('images'),async function (req,res){
    console.log(req.body);
   
    const  Imagename=req.file.filename
    try{
         await IMAGE.create({images:Imagename})

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


router.get('/imageget', async  (req,res)=>{
try{
  await IMAGE.find().then((data)=>{
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
router.get("/updat:getid", async function (req, res) {
  try {
    let data = await IMAGE.findById(req.params.getid, req.body);
    res.json({
      status:data,
      message:'success'
    })
  }catch(e){
res.json('error')
  }


})
  // update------------->


  router.put("/updating:update", upload.single('images'),  async function (req, res) {
    try {
    
      const params=req.params.update
      const updateData = Object.assign({},req.body); // Copy req.body in order not to change it
updateData.images = req.file.filename
// Blog.findOneAndUpdate({ _id: req.body._id},updateData...

    await IMAGE.findByIdAndUpdate(params,updateData).then((data)=>{
        res.json({
          status: "this user updated successfully",
          data:data
        });
      })
    
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });

  /////////////

  router.put('/updating:update',upload.single('images'),async function (req,res){
    console.log(req.body);
   
    const  images=req.file.filename.images
    const paramsss=req.params.update
    try{
    if(req.file){
     await IMAGE.findByIdAndUpdate(paramsss,images)
  
      .then((data)=>{
  res.json({status:"ok",data:data})
      })
    }
       

    }
    catch(err){
console.log(err);
res.json({status:err,
message:"failed"
})

    }
})



  // router.put("/updating:update",upload.single('images'),async function (req, res) {
   
  //   try {
  //     // if(req.file){
  //     //   await IMAGE.findByIdAndUpdate(req.params.update,req.file.filename.images).then((data)=>{
  //   //       status:"update successfully",
  //     //       data:req.file.filename
  //     //     })
  //     //   })
  //     // }
  //     if(req.file){
        
  //       await IMAGE.findByIdAndUpdate( req.params.update,req.file.filename )
  //        .then((data)=>{
  //         res.json({status:'ok',data:req.images});
  //       })
  //     }
    
   
  //   } catch (err) {
  //     res.json({
  //       status: "error",
  //       meassage: err,
  //     });
  //   }
  // });  //     res.json({
      
  //delete------------->

  router.delete("/D:delete", async function (req, res) {
    try {
      await IMAGE.findByIdAndDelete(req.params.delete, req.body);
      res.json({
        status: "successfuly deleted",
      });
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });
module.exports=router;
