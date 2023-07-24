import {React, useState} from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import '../../styles/Registration.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../../common/Footer';
import '../../styles/Button.css'

function Registration() {
   
    const[formData, setFormData] = useState({
        loginId:'',
        firstname:'',
        lastName:'',
        email:'',
        contactNumber:'',
        password:'',
        confirmPassword:'',
        role:''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("clicked")
        const validationErrors = {};
        if(formData.loginId.trim() === ''){
            validationErrors.loginId = "Please Enter LoginId"
        }
        if(formData.firstname.trim() === ''){
            validationErrors.firstname= "Please Enter First Name"
        }
        if(formData.lastName.trim() === ''){
            validationErrors.lastName = "Please Enter Last Name"
        }
        if(formData.email.trim() === ''){
            validationErrors.email = "Please Enter Email"
        }
        if(formData.contactNumber.trim() === ''){
            validationErrors.contactNumber = "Please Enter Your Contact Number"
        }
        if(formData.password.trim() === ''){
            validationErrors.password = "Please Enter Password"
        }
         if(formData.confirmPassword !== formData.password){
            validationErrors.password = "Password And Confirm Password Is Not Same"
        }
        if(formData.email === formData.loginId){
            validationErrors.email = 'Login ID And Email should be different'
        }
        if(formData.role.trim() === ''){
            validationErrors.role = "Please select role as admin or user"
        }
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
        }
        else{
            try{
                await axios.post("http://localhost:8081/api/v1.0/moviebooking/register", {
                    loginId: formData.loginId,
                    firstname: formData.firstname,
                    lastName: formData.lastName,
                    email: formData.email,
                    contactNumber: formData.contactNumber,
                    password: formData.password,
                    role:formData.role
                });
                alert("User Registered Successfully");
            }catch (err){
                alert('Error in Registering' ,err);
            }
        }
        
    }



    return(
        <>
            <Container>
                <div className='registration-container'>
                <Form className='registration-form'>
                <div class="label">
                <h2>Registration</h2>
                        <Form.Group  controlId='loginId' >
                            <Form.Label column> Login Id : <span style={{color:"red"}}>*</span></Form.Label>
                            <Form.Control 
                                type='text'
                                name='loginId'
                                placeholder='Enter Email/Username'
                                value={formData.loginId}
                                onChange={handleChange}
                            />
                            {errors.loginId && <span className='error-message'>{errors.loginId}</span>}

                        </Form.Group>
                        <Form.Group controlId='firstName' >
                            <Form.Label> First Name : <span style={{color:"red"}}>*</span></Form.Label>
                            {errors.firstname && <span className='error-message'>{errors.firstname}</span>}
                             <Form.Control 
                                type='text'
                                name='firstname'
                                placeholder='Enter First Name'
                                value={formData.firstname}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='lastName'>
                            <Form.Label> Last Name : <span style={{color:"red"}}>*</span> </Form.Label>
                            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}

                            <Form.Control 
                                type='text'
                                name='lastName'
                                placeholder='Enter Last Name'
                                value={formData.lastName}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='email'>
                            <Form.Label> Email : <span style={{color:"red"}}>*</span></Form.Label>
                            {errors.email && <span className='error-message'>{errors.email}</span>}

                            <Form.Control 
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                value={formData.email}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='contactNumber'>
                            <Form.Label> Contact Number : <span style={{color:"red"}}>*</span> </Form.Label>
                            {errors.contactNumber && <span className='error-message'>{errors.contactNumber}</span>}

                            <Form.Control 
                                type='text'
                                name='contactNumber'
                                placeholder='Enter Contact Number'
                                value={formData.contactNumber}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='password'>
                            <Form.Label> Password : <span style={{color:"red"}}>*</span></Form.Label>
                            {errors.password && <span className='error-message'>{errors.password}</span>}

                            <Form.Control 
                                type='password'
                                name='password'
                                placeholder='Enter Password'
                                value={formData.password}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='confirmPassword'>
                            <Form.Label> Confirm Password : <span style={{color:"red"}}>*</span> </Form.Label>
                            {errors.confirmPassword && <span className='error-message'>{errors.confirmPassword}</span>}

                            <Form.Control 
                                type='password'
                                name='confirmPassword'
                                placeholder='Enter Password Again'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group  controlId='role'>
                            <Form.Label> Role : <span style={{color:"red"}}>*</span></Form.Label>
                            {errors.role && <span className='error-message'>{errors.role}</span>}

                            <Form.Control 
                                type='text'
                                name='role'
                                placeholder='Enter Role'
                                value={formData.role}
                                onChange={handleChange}
                            />
                        </Form.Group>

                    <div className="button-groups">
                    <Button  type='submit'  onClick={handleSubmit}> Register </Button>

                    <Button  type='button'  onClick={(event) => {
                        navigate("/login")
                    }}> Move To Login Page</Button>
                    </div>
                    </div>

                </Form>
                </div>
            </Container>
            <Footer/>
        </>
    )

}

export default Registration;