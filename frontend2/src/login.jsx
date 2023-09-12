import React, { useState } from "react";
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css"

import { useNavigate } from "react-router-dom";

export const Login = function () {
  const home= useNavigate();
  const [error,seterror]=useState(false)
    const [login, setlogin] = useState({
        Email: "",
        Password: "",

    })




    const handlechange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setlogin({
            ...login, [name]: value
        })



    }
    const handleclick = () => {

        // console.log(login);


        if(
login.Email.length===0||
      login.Password.length===0){
      seterror(true)
      
      
    }
      else{
        console.log(login);
        axios.post("http://localhost:5000/login/log",login)
        .then(function (response){
          console.log(response.data.status)
        
         
        if(response.data.status=== "success"){
          alert("Welcome back")
          home("/")
          
          }  else if(response.data.status !=="success"){
       
            alert('Incorrect Password or Email')
    
  
    
       }
       
        })
        .catch(function (error){
          console.log(error);
       
          
        })
        
      }
        
            
        
        
     



      

        // login("/")
    }
    return (

        <Fragment> 



            <div>
            <div className="d-flex">
                <img id="logoimg" src="./logo.svg" alt="" />
            </div>

            <div id="login5" className="container">


                <h4 id="log" className="d-flex">Log in to your account</h4>
                <br />

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handlechange} name="Email" value={login.Email} 
                        type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlechange}
                         name="Password" value={login.Password} type="password" placeholder="Password" />
                        <a id="forget" href="#">Forget?</a>
                    </Form.Group>

                    <Button onClick={handleclick} id="loginbutton" className="fw-semibold" variant="secondary opacity-25" type="submit">
                        Login
                    </Button>
                    <div id="or" className="d-flex"> <hr />OR <hr /></div>
                
                   <div id="google3" className="d-flex btn btn"> 
                    {/* google login link.................  and  google logo link.........>   */}
                   
                
                   
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-150647848%3A1683275293772954&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D450298686065.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DLGtQfQN5IqCVdOu2%252B9GP7A%26channel_id%3Dddad46011a0147c24c7884b2e76c70be058ab37a78596e32b7acf32595392560%26origin%3Dhttps%3A%2F%2Fenglishtest.duolingo.com&faa=1&rip=1&flowName=GlifWebSignIn&flowEntry=AddSession">   
                                      <div class="nsm7Bb-HzV7m-LgbsSe-Bz112c d-flex"><svg id="google" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path
                             fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
  
  <span role="button" id="google1">Sign in with Google</span></div> <br /> 
                              </a>     </div> 
                              {error ? (
              <Form.Label id="validation">
                Please fill all the fields
              </Form.Label>
            ) : (
              ""
            )}

              </Form>
              </div>
              <Link to="/s"><h5   id="account"> NEED AN ACCOUNT? SIGN UP</h5></Link>


            </div>
        </Fragment>
    )
}