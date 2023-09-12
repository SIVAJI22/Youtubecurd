// import React, { Fragment, useState } from "react";
// import axios from "axios"; 
//  export const Base64=()=>{
//     const [postImage,setpostImage]=useState({Myfile:""})

// const url="http://localhost:5000/image"



// const createpost=async(newImage)=>{
//     try{
//         await axios.post(url,newImage)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

//    const  handlesumbit=(e)=>{
//     e.preventDefault();
//     createpost(postImage)
//     console.log('image uploaded');
//    }
//    const handlefileupload= async(e)=>{
//     const file=e.target.files[0];

//     const base64= await convertTobase64(file)
//     console.log(base64);
//     setpostImage({
//         ...postImage,Myfile:base64
//     })
//    }
//     return(
//         <Fragment>
//             <div>
//                 <form onSubmit={handlesumbit}action=" ">             
//                      <input aria-label="image" name="Myfile"
//                      onChange={handlefileupload} accept=".jpeg , .png , .mp4 , .jpg" type="file" /> 
//                      <button type="submit">sumbit</button>  </form>

//             </div>
//         </Fragment>
//     )
// }
// const convertTobase64=(file)=>{
//     return new Promise((resolve, reject)=>{
//         const fileReader=new FileReader();
//         fileReader.readAsArrayBuffer(file)
//     fileReader.onload=()=>{
//         resolve(fileReader.result)
//     };
//     fileReader.onerror=(error)=>{
    
//         reject(error)
//     }
//     })
//        };
    