import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import '../../styles/Header.css'

function AddMovie(){
    const navigate = useNavigate();
    var email=(localStorage.getItem('email'));
    const adminLogout = async(event) =>{
        console.log("inside logout")
        try{
           console.log(localStorage.getItem('email'));
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
        <>
       
       <div className='tab'>
       <button type="submit" onClick={adminLogout}>LOGOUT</button>

        <button  onClick={(event) => {
                navigate("/AddMovie")
        }}>UPDATE MOVIE</button>

        <button  onClick={(event) => {
                navigate("/getAllTickets")
        }}>BOOKED TICKETS</button>

        </div>
        </>
    );
};

export default AddMovie;