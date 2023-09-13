


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navy } from './navbar';
import { Fragment } from "react";
import { useParams } from "react-router-dom";





 export const Fileupload=()=>{
const params =useParams()
const [images,setimages]=useState(null)
const [getimage,setgetimage]=useState(null)
useEffect(()=>{
    getImage();
},[])
    

// const update= async (id)=>{
const u=()=>{
  var newupload=document.getElementById("newupload")
  if(!getimage){

    newupload.style.display="block  "
  
  }else{
    newupload.style.display="none"
  }
}


// const formdata= new FormData();
// formdata.append('images',images);
// const result= await axios.put(`http://localhost:5000/image/updating${id}`,formdata,
// {
// headers:{"Content-Type":"multipart/form-data"},
// })
// };



const onInputchange=(e)=>{
console.log(e.target.files[0]);

setimages(e.target.files[0])
}
const update=async(id)=>{
  console.log(id);
 
  if(id){
    const formdata= new FormData();
formdata.append('images',images);
console.log(images);
const result= await axios.put(`http://localhost:5000/image//updating${id}`,formdata,
{
headers:{"Content-Type":"multipart/form-data"},
})

  } 
  else{
    onsumbitimage()
    console.log('dfauakjadhu');
    
      }
}
const onsumbitimage= async (e)=>{


  
    // e.preventDefault();
    const formdata= new FormData();
    formdata.append('images',images);
    console.log(images);
const result= await axios.post('http://localhost:5000/image/uploadimage',formdata,
{
    headers:{"Content-Type":"multipart/form-data"},
})
  
 
};
const handledelete= async(id)=>{
  
    console.log(`http://localhost:5000/image/D${id}`);
    try{
      axios.delete(`http://localhost:5000/image/D${id}`).then((response)=>{
        console.log(response.data.data);
      })
    }
catch(err){
console.log(err)
}
   
  
  }

const getImage=()=>{
    
        axios.get('http://localhost:5000/image/imageget').then((response)=>{
            console.log(response.data.data);
    
            setgetimage(response.data.data)
          
        })
       
    
  

   }

//    //////////////////////////////////////////////////////////
// const getid=
//    document.getElementById("#profileImage").onclick(uplo)

// const uplo=    document.getElementById("#imageUpload")
// function fasterPreview( uploader ) {
//     if ( uploader.files && uploader.files[0] ){
//           document.getElementById('#profileImage').attr('src', 
//              window.URL.createObjectURL(uploader.files[0]) );
//     }
// }

// document.getElementById("#imageUpload").change(function(){
//     fasterPreview( this );
// });
const gallery=()=>{
  const  x= document.getElementById('upload').click()

  
  
}

// function updating(){
//   var x=document.getElementById('updele')
//   var s=document.getElementById('upload')
//   if(images===null){
//     x.style.display="block"
//   }else{
//     x.style.display="none"
//   }
// }
// function updating(){
//   var s=document.getElementById("myDIv")


// if(s.style.display==="none"){
//   newupload.style.display="block";
// }else{
//   newupload.style.display="none";
// }
// }


function myFunction() {
  
    var x = document.getElementById("myDIV");
    var s=document.getElementById("myDIv")
    var v=document.getElementById("myDIs");
 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    ////s
  
    if (s.style.display === "none") {
      s.style.display = "block";
    } else {
      s.style.display = "none";
    }
    //    x.style.backgroundColor='red'
    // if (v.style.display === "none") {
    //   v.style.display = "block";
    // } else {
    //   v.style.display = "none";
    // }
  }

   ////////////////////////

    return(
        <Fragment>

            <div>
            <Navy />

            <div>
                <form  onSubmit={onsumbitimage} action="">

                    <input id="upload"  onChange={onInputchange} type="file" />
                    {/* <button id="newupload">upload</button> */}
                </form>
<div id="divdp" htmlfor="dp"></div>
<div  id="input">
<img onClick={myFunction}  id="edit" src="./edit.png" alt="" />
<img id="myDIV"className="btn "  onClick={gallery} src="./camera.png" alt="" />
{/* <img  >Gallery/> */}
{

getimage==null?"":  getimage.map((data)=>{
      return <div>

  
      
       <div id="uploadimage" >
<img id="dp" src={require( `./Images/${data.images}`)}    alt="avatar" />


<div id="updele" >

{/* <button id="myDIs" onClick={()=> handledelete(data._id)}>Delete</button> */}
<button id="myDIv" onClick={()=>update(data._id)} >upload</button>
</div>  </div> 

</div>  
  })
}

</div>
         
            </div>       
            {/* <button onClick={myFunction}>Click Me</button> */}



    
{/* 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="profile-container">
   <image id="profileImage" src="http://lorempixel.com/100/100" />
</div> */}
<input id="imageUpload" type="file" 
       name="profile_photo" placeholder="Photo" required="" capture/>
            
                 </div>
        </Fragment>
    )
}














// import React, { useRef, useState } from "react";
// import axios from 'axios'
// import './fileupload.css'
// import { Nav } from "./navbar";
// export const Image = () => {
//     const [file, setfile] = useState("");

//     const [  Description , setDescription  ] = useState('');
//     const [Filename, setFilename] = useState("");
//     const [resulttext, setresulttext] = useState("");

// // const [video,setvideo]=useState("")
// // const [videoname,setvideoname]=useState('')
//     // const descrip = (e)=>{
//     //     const target=e.target
//     //     const name= target.name;
//     //     const value=target.value;
//     //     setdescription({
//     //         ...description,[name]:value
//     //     })
    
//     // }
//     const descrip=useRef(null)
//     const fileinput = useRef(null);
// const videofile=useRef(null)
    
//     const savefile = () => {

// // setvideo(videofile.current.files[0])
// // setvideoname(videofile.current.files[0].name)
//         setfile(fileinput.current.files[0])
//         setFilename(fileinput.current.files[0].name)
//     }
//     const savefile2=()=>{
// setDescription(descrip.current.value)
//     }
    
  
//     const onclicking = async () => {
//         const formdata = new FormData();
//         formdata.append('file', file);
//         formdata.append('Filename', Filename);
//       formdata.append('Description',Description)
//     //   formdata.append('video',video  )
//     //   formdata.append('videoname',videoname  )
//         // formdata.append(' Description',  Description   )
//         // console.log(' file------>,',file);
//         console.log(Filename);
// console.log(typeof(Description    ));
//         try {
           

//             const res = await axios.post('http://localhost:5000/U   ', formdata)
// console.log(formdata);
//             setresulttext(res.data.message);


//             setTimeout(() => {
//                 setresulttext()
//             }, 3000);

//             fileinput.current.value = ("");



//         }
//         catch (er) {
//             console.log(er);
//             if (er.response !== undefined) {

//                 setresulttext(er.response.data.message)
//             }
//             else {
//                 setresulttext("Server error")
//             }

//             setTimeout(() => {
//                 setresulttext()
//             }, 3000);
//         }
//     }


//     return (
//         <div  className="mt-5">

//             <Nav />
//             <br />
//             <div id="inputs" className="container-fluid">
    
//             <br /> <br /> <span>upload Your Files</span>
//             <input id="file" accept=".jpeg ,  .jpg ,mp4, .png " type="file" ref={fileinput} onChange={savefile} />
//             <br />

//             <br />
//             {/* <input placeholder="upload video" onChange={savefile} accept="mp4" ref={videofile} type="file" /> */}
//             <input id="description "  placeholder=" Description"ref={descrip} onChange={savefile2} type="text" />

// {/* <input value={Description} name="Description"  onChange ={ e=>setDescription(e.target.value)}type="text" /> */}
          
//             <br />
//             <button id="upload"onClick={onclicking}>Upload</button>
//             {/* <button onClick={onclick}>description

//             </button> */}
//             {resulttext ? (<p>{resulttext} </p>) : null}
//             </div>
        
//         </div>
//     )
// }
