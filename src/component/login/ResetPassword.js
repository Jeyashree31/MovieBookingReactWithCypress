import {React, useEffect, useState} from 'react';
import { Button,Container, Form } from 'react-bootstrap';
import "../../styles/Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword(){
    const [loginId, setLoginId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[errors,setErrors]=useState({});
    const[user,setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []) 

    const fetchUser = async() => {
        try{
            const response = await axios.get('http://localhost:8081/api/v1.0/moviebooking/getusers');
            const data = response.data;
            console.log(response.data);
            const user = data.flatMap((users) => users.email);
            setUser(user.toString())
            console.log(user.toString())
        }catch(error){
            alert(error)
    }
    }

    const PasswordReset = async(event) => {
        const newErrors ={};
        if(email === ''){
            newErrors.email = "Please Enter Email/Username"
        }
        if(password === ''){
            newErrors.password = "Please Enter Password"
        }
        if((Object.keys(newErrors).length > 0)){
            setErrors(newErrors);
        }else{
            console.log(user)
        if(user.includes(email)){
                
                try{
                await axios.post("http://localhost:8081/api/v1.0/moviebooking/forgot", { 
                    email: email,  
                    password: password
                }).then((res) => 
                {
                    alert(res.data)
               })
            }
               catch(error){
                   alert("Error in Resetting password:" , error)
               }
        }else{
            alert("UserName Not Registered")
        }
    }

    }

    return(
        <main>
            <Container className='login-container' >
            
        
             <div className='login-container'>   
                <Form className='login-form'>
                <h2>Reset Password</h2>
                    <Form.Group  controlId='email'  >
                        <Form.Label column sm='2'> Email/UserName: </Form.Label>
                        
                        <Form.Control
                        type='email'
                        placeholder='Enter Username'
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    
                    </Form.Group>
                    <Form.Group   controlId='password' >
                        <Form.Label> Password: </Form.Label>
                        
                        <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}></Form.Control>
                        
                    </Form.Group>
                    <div className='button-groups'>
                        <Button type="submit" onClick={PasswordReset}>Reset </Button>
                        <Button onClick={() => {
                            navigate('/login')
                        }}> Back To Login</Button>
                    </div>
                    
            </Form>
            </div>
            </Container>
        </main>
    )
}
export default ResetPassword;