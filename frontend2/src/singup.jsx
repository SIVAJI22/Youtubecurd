import React, { useState } from "react";
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

import { Link} from "react-router-dom";
import "./signup.css"
export const Singup =  ()=> {
const[errors,seterrors]=useState(false)
// const  sign=useNavigate()
    const [signup, setsignup] = useState({
        Name: "",
        Email: "",
        Password: "",
        Mobile: "",
          

    })
    // const [validation, setValidation] = useState({ 
    //     Name: '',
    //    Mobile:"",
    //     Email: '',
    //     password: '',
      
    //   });
    
  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let errors = validation;
    
    //     //first Name validation
    //     if (!signup.Name.trim()) {
    //       errors.Name = 'First name is required';
    //       seterrors(true)
    //     } else {
    //       errors.Name = '';
    //     }
    //     //last Name validation
    //     // if (!inputValues.lName.trim()) {
    //     //   errors.lName = 'Last name is required';
    //     // } else {
    //     //   errors.lName = '';
    //     // }
    
    //     // email validation
    //     const emailCond =
    //       "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    //     if (!signup.Email.trim()) {
    //       errors.Email = 'Email is required';
    //     } else if (!signup.Email.match(emailCond)) {
    //       errors.Email = 'Please enter a valid email address';
    //     } else {
    //       errors.Email = '';
    //     }
    
    //     const MobileCond =
    //   "^[0-9]{10}$";;
    //     if (signup.Mobile.trim()) {
    //       errors.Mobile = 'Mobile  is required';
    //     } else if (signup.Mobile.match(MobileCond)) {
    //       errors.Mobile = 'Please enter a Mobile Number';
    //     } else {
    //       errors.Mobile = '';
    //     }
    
    //     //password validation
    //     const cond1 = '/^(?=.*[a-z]).{6,20}$/';
    //     const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
    //     const cond3 = '/^(?=.*[0-9]).{6,20}$/';
    //     const Password = signup.Password;
    //     if (!Password) {
    //       errors.password = 'password is required';
    //     } else if (Password.length < 6) {
    //       errors.Password = 'Password must be longer than 6 characters';
    //     } else if (Password.length >= 20) {
    //       errors.password = 'Password must shorter than 20 characters';
    //     } else if (!Password.match(cond1)) {
    //       errors.password = 'Password must contain at least one lowercase';
    //     } else if (!Password.match(cond2)) {
    //       errors.password = 'Password must contain at least one capital letter';
    //     } else if (!Password.match(cond3)) {
    //       errors.Password = 'Password must contain at least a number';
    //     }
       
  
    //      else  {
    //       errors.Password = '';
    //     } 
    //     return setValidation(errors);
        
  
    //     };
  




    const handlechange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setsignup({
            ...signup, [name]: value
        })



    }
    const handleclick = () => {
       

        
    if(signup.Email.length===0|| signup.Mobile.length===0 ||signup.Name.length===0|| signup.Password.length===0
     ) {
        console.log(signup);
          seterrors(true)
        
          // setValidation(errors)
       
        }
        else{
          console.log(signup);
          axios.post("http://localhost:5000/login/s", signup)
          .then(function (response) {
            console.log(response.data.status);
            if (response.data.status === "user register successfully") {
              alert("user register successfully");
              // sign("/");
            } else {
              console.log(response);
              alert("user already exist");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
     
        
        
        }
        
    }
    return (

        <Fragment>
            <div className="d-flex">
                <img id="logoimg" src="./logo.svg" alt="" />
            </div>

            <div id="login2" className="container">


                <h4 id="log" className="d-flex">Create an account</h4>
                
                <span id="log4" className="fw-light fs-5">to access your free practice test</span>
  <br /> <br />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* {errors ? (
              <Form.Label id="validation">
                Please enter the name
              </Form.Label>):("") } */}
                    <Form.Control id="form"  onChange={handlechange} name="Name" 
                        value={signup.Name} type="text" placeholder="Name" />

                   
<br />
                       
                        <Form.Control id="form" onChange={handlechange} name="Mobile" 
                        value={signup.Mobile} type="number"  placeholder="Mobile number" />
                      
                    </Form.Group>





                 
                        <Form.Control id="form"  onChange={handlechange} name="Email" 
                        value={signup.Emailmail} type="email" placeholder="Email address" />
                   
<br />

                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                        <Form.Control id="form"z  onChange={handlechange} name="Password" value={signup.Password} type="password" placeholder="Password" />
                        {/* <Form.Control id="form"  onChange={handlechange} name="email"
                         value={signup.email} type="email" placeholder="Confirm Email address" /> */}
                      

                    </Form.Group>

                    <Button onClick={handleclick} id="loginbutton" className="fw-semibold" variant="secondary opacity-25" type="submit">
                        Next
                    </Button>
                    <div id="or" className="d-flex"> <hr />OR <hr /></div>
                
                   <div id="google3" className="d-flex btn btn"> 
                    {/* google login link.................  and  google logo link.........>   */}
                   
                
                   
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-150647848%3A1683275293772954&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D450298686065.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DLGtQfQN5IqCVdOu2%252B9GP7A%26channel_id%3Dddad46011a0147c24c7884b2e76c70be058ab37a78596e32b7acf32595392560%26origin%3Dhttps%3A%2F%2Fenglishtest.duolingo.com&faa=1&rip=1&flowName=GlifWebSignIn&flowEntry=AddSession">   
                                      <div class="nsm7Bb-HzV7m-LgbsSe-Bz112c d-flex"><svg id="google" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path
                             fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
  
  <span role="button" id="google11">Sign in with Google</span></div> <br /> 
                              </a>     </div> 
                         



                              {errors ? (
              <Form.Label id="validation">
                Please fill all the fields
              </Form.Label>
            ) : (
              ""
            )}

              </Form>
<br /> <br />

            <Link to="/login"><h5   id="account1"> HAVE AN ACCOUNT? LOG IN</h5></Link> 
 <br />
            </div>
        </Fragment>
    )
}