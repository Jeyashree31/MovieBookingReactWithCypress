import {React , useState} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import "../../styles/Login.css";
import axios from 'axios';
import Footer from '../../common/Footer';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[errors,setErrors]=useState({});
    const[user, setUser] = useState([]);
    const [forgetEmail,setForgetEmail]=useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            console.log("login try");
            await axios.post("http://localhost:8081/api/v1.0/moviebooking/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
            if(res.data.role.toString() === "Admin"){
                  localStorage.setItem('email',email)
                navigate('/home');
             }else{
                localStorage.setItem('email',email)
                navigate('/userHome');
             }
          });
}catch(error){
    if(email === "" && password === ""){
        alert("Enter UserName And Password");
     }else if(password === ""){
        alert("Enter Password")
     }else if(email === ""){
        alert("Enter Username")
     }
     else{
         alert("UserName or Password is incorrect");
     }
}
}

    return(
        <main>
            <div className='tab'>
            <button  onClick={(event) => {
                navigate("/")
             }}>HOME</button>
           </div>
         <div className='login-container'>   
                <Form className='login-form'>
                <h2>Login Into Account</h2>
                    <Form.Group  controlId='email'  >
                        <Form.Label column sm='2'> Email/UserName: </Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Enter Username'
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                            localStorage.setItem('email',event.target.value);
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

                    <div className='button-group'>
                    <Button    type='submit' onClick={login} > Log In</Button>
                    <Button    type='button' onClick={(event) => {
                         navigate("/Registration")
                    }}> Create An Account</Button>
                    <Button type='submit' onClick={()=>{navigate('/ResetPassword')}} >Forgot Password ?</Button>
                    </div>
                </Form>
                </div>
            <Footer/>
        </main>
    )
}
export default Login;