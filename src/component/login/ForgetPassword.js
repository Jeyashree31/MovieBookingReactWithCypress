import {React, useEffect, useState} from 'react';
import { Container, Form } from 'react-bootstrap';
import "../../styles/Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgetPassword(){
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[errors,setErrors]=useState({});
    const[user,setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, [])

    const PasswordReset = async(event) => {
        event.preventDefault();
        const newErrors ={};
        if(loginId === ''){
            newErrors.loginId = "Please Enter LoginID"
        }
        if(password === ''){
            newErrors.password = "Please Enter Password"
        }
        if((Object.keys(newErrors).length > 0)){
            setErrors(newErrors);
        }else{
        if(user.includes(loginId)){
            if(password === confirmPassword){
                try{
                const response=axios.get(`http://localhost:8081/api/v1.0/moviebooking/forgot`, { 
                    email: email,
                    password: password
                })
                   alert(response)
                   console.log(response.data);
               }catch(error){
                   alert("Error in Resetting password:" , error)
               }
            }else{
                alert("Password And ConfirmPassword should be same")
            }
        }else{
            alert("UserName Not Registered")
        }
    }

    }





    return(
        <main>
            <Container className='login-container' >
            
            <Form className='login-form' >
            <h2> Reset Password</h2>
            <Form.Group  controlId='loginId'  >
                        <Form.Label column sm='2'> LoginID/UserName: </Form.Label>
                        {errors.loginId && <span className='error-message'>{errors.loginId}</span> }
                        <Form.Control
                        type='loginId'
                        placeholder='Enter Username'
                        value={loginId}
                        onChange={(event) => {
                            setLoginId(event.target.value);
                        }}
                        required
                        ></Form.Control>
                        
                    </Form.Group>
                    <Form.Group   controlId='password' >
                        <Form.Label> Password: </Form.Label>
                        {errors.password && <span className='error-message'>{errors.password}</span> }
                         <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        required></Form.Control>
                        
                    </Form.Group>
                    <Form.Group   controlId='confirmPassword' >
                        <Form.Label> Confirm Password: </Form.Label>
                        
                        <Form.Control
                        type='password'
                        placeholder='Enter Password Again'
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }}
                        required></Form.Control>
                        
                    </Form.Group>
                    <div className='button-groups'>
                        <button onClick={PasswordReset}>Reset </button>
                        <button onClick={() => {
                            navigate('/login')
                        }}> Back To Login</button>
                    </div>
            </Form>
            </Container>
        </main>
    )
}
export default ResetPassword;