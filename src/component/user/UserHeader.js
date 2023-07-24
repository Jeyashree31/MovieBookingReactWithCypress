import {React, useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import '../../styles/Header.css'
import axios from 'axios';

function UserHeader(){
    const navigate = useNavigate();
    const [logout, setlogout]=useState(false)
    var email=(localStorage.getItem('email'));
    const logoutFunc = async() =>{
        console.log("inside logout")
        try{
            const response=await axios.get(`http://localhost:8081/api/v1.0/moviebooking/logout/${email}`,{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            alert(response.data);
            navigate('/login');
        }catch(error){
            alert(error)
        }
    }

    return(
        <div className='tab'>
         <button  onClick={(event) => {
                navigate("/userHome")
        }}>HOME</button>
         <button type="submit" onClick={logoutFunc}>LOGOUT</button>
        </div>
    );
};

export default UserHeader;