

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navy } from './navbar';
import { Fragment } from "react";
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




 export const Video=()=>{
const params =useParams()
const [videos,setvideos]=useState(null)
const [getvideos,setgetvideos]=useState(null)
useEffect(()=>{
    getvideo();
},[])
    

const update=()=>{
const  x= document.getElementById('upload').click()

}

const onInputchange=(e)=>{
console.log(e.target.files[0]);

setvideos(e.target.files[0])
}

const onsumbitimage= async (e)=>{
    e.preventDefault();
    const formdata= new FormData();
    formdata.append('videos',videos);
const result= await axios.post('https://youtubevideo.onrender.com/video/uploadvideo',formdata,
{
    headers:{"Content-Type":"multipart/form-data"},
})
};
const handledelete=(id)=>{
  
    

    axios.delete(`https://youtubevideo.onrender.com/video/D${id}`)

    .then(function (response){
      console.log(response.data)
 
       
    })
    .catch(function (error){
      console.log(error);
    })
  
   
  
  }

const getvideo=()=>{
    
        axios.get('https://youtubevideo.onrender.com/video/videoget').then((response)=>{
            console.log(response.data.data);
    
            setgetvideos(response.data.data)
        })
       
    
  

   }

//    //////////////////////////////////////////////////////////

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     x.style.backgroundColor='red'
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

   ////////////////////////
function myupload(){
  var d=document.getElementById('upload').click()
}
    return(
        <Fragment>

            <div>
            <Navy />

            <div>
                <form  onSubmit={onsumbitimage} action="">
<img onClick={myupload} className="btn" src="./plus.png" id="plus" alt="" />
                    <input id="upload" accept="image/*"  onChange={onInputchange} type="file" />
                    <button>upload video</button>
                </form>
<div id="divdp" htmlfor="dp"></div>
<div id="input">
{

getvideos==null?"":  getvideos.map((data)=>{
      return <div>

  
{/*       
       <div id="uploadimage"> */}
{/* <img id="dp" src={require( `./Images/${data.videos}`)}    alt="avatar" /> */}
<div className="container  d-flex">
    <Row>
        <Col><video id="video" controls  height={100} width={100}>

<source controls src={require(`./Videos/${data.videos}`)} type="video/mp4"/>
</video>
        </Col>
        {/* <Col><video id="video" controls  height={100} width={100}>

<source controls src={require(`./Videos/${data.videos}`)} type="video/mp4"/>
</video>
        </Col> */}
    </Row>
    <button id="btn" className="btn btn-danger" onClick={()=> handledelete(data._id)}>Delete</button>

</div>
 

</div>  
  })
}

</div>
         
            </div>       
        
                 </div>
        </Fragment>
    )
}
