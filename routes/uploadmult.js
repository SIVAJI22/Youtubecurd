// const express = require('express')
// const multer  = require('multer')
// // const upload = multer({ dest: 'uploads/' })
// const Uploadvideo=require('../model/product');
// const router=express.Router()
// const app = express();
// const path=require('path');

// // app.post('/profile', upload.single('avatar'), function (req, res, next) {
// //   // req.file is the `avatar` file
// //   // req.body will hold the text fields, if there were any
// // })

// // app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
// //   // req.files is array of `photos` files
// //   // req.body will contain the text fields, if there were any
// // })



// const storage=  multer.diskStorage({
//     destination:(req,file,cb)=>    {
      

//          cb(null, "./public/images")

//     },
    
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+ path.extname (  file.originalname)  )
//     }
// });


// // let maxsize= 1*100*100
// const upload=  multer({ 
// storage:storage,
// // limits:{
// //     fileSize: 1 * 1000 * 1000
// // }
// })

// router.post('/h', function(req, res, next) {
//     res.send('respond with a resource');
//   });

  
// router.post('/ph', upload.array('avatar', 12), function (req, res, next) {
//     // req.files is array of `photos` files
// try{
//     const newvideo= new  Uploadvideo({
//         avatar:{
//             data:req.file.filename,
//             contentType:'video/mp4'
//         }
//     })
//     newvideo.save();
  
//     res.json({newvideo})

// }
// catch(e){
//     res.json(e)

// }
   
//     // req.body will contain the text fields, if there were any
//   })
  
// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// router.post('/cool', cpUpload, async function (req, res, next) {



//     if(!req.file){
//         res.status(400).json({message:"No file!"});
//     }
// else{

//     const newImage = await new Uploadvideo ({
// avatar:{
//     data:req.file.filename,
//     contentType:'image/png'
// },
// gallery:{
//     data:req.file.filename,
//     contentType:'video/mp4'
// }
//     }
//         // Filename:req.body.Filename,
//         // Description:req.body.Description  ,
     
//         // file:{
//         //     data:   req.file,
//         //     contentType:'image/png,mp4'
//         // },

//     )
//     console.log(req.body.description);
//     console.log(req.body.Filename);
//     console.log(req.file.filename)
//     newImage.save().then(()=> res.send('successfully uploaded')).catch((err)=>console.log(err))

//     res.status(200).json({message:"File Uploaded"})
// }

//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })
// module.exports=router;