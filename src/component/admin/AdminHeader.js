import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import '../../styles/Header.css'

function AdminHeader(){
    const navigate = useNavigate();
    const[email,setEmail]=useState("")
    return(
        <>
       <div className='tab'>
        <button  onClick={(event) => {
                navigate("/home")
        }}>HOME</button>
        </div>
        </>
    );
};

export default AdminHeader;