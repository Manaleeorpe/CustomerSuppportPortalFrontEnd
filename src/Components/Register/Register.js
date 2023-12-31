import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../TokenContext";


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [adminid, setAdmin] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // New state variable for success message
    const [failMessage, setFailMessage ] = useState("");

    const handleRegister = async () => {
      let endpoint = "http://localhost:8080/auth/customer/signup"; // Default endpoint
  
      const registerData = { username, email, phone_number, password};

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });
  
        if (response.ok) {
          setSuccessMessage("Registeration successful"); // Set the success message
            setTimeout(() => {
              setSuccessMessage(""); // Hide the success message after 3 seconds
              navigate("/login");
            }, 1000);
          // You can redirect the user to a login page or perform any other actions here
          
        } else {
          setFailMessage("Registration failed"); // Set the success message
          setTimeout(() => setFailMessage(""), 1000);
        }
      } catch (error) {
        document.write(`Error occurred: ${error}`);
      }
    };

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Customer Support Portal</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" 
                    value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}/>
                
                <MDBInput wrapperClass='mb-4' label='Email Address' id='formControlLg' type='text' size="lg" 
                    value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}/>
                
                <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type='text' size="lg"
                    value={phone_number}
                    onChange={(e) => {
                      setPhone_number(e.target.value);
                    }}/>

                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}/>


              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleRegister}>Register</MDBBtn>
              <div>
              {failMessage && (
                <div className="alert alert-fail" role="alert" style={{ backgroundColor: 'red', color: 'white' }}>
                  {failMessage}
                </div>
              )}
            </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    
  );
}

export default Register;