import{React,useState} from 'react';
import axios from 'axios';
import { Button, Form} from 'react-bootstrap';

import { useNavigate,useParams } from 'react-router-dom';
function AddMovieFunc(){

   const[movieId,setMovieId]=useState("")
   const[movieName,setMovieName]=useState("")
   const[theatreName,setTheatreName]=useState("")
   const navigate = useNavigate();

var email=localStorage.getItem('email');
const addMovies = async() =>{    
        try{
            const response =await axios.post(`http://localhost:8081/api/v1.0/moviebooking/addMovies/${email}`,{
                movieId: movieId,  
                movieName: movieName,
                theatreName:theatreName
            });
            const data = response.data;
            alert(data)
        }catch(error){
            alert(error)
    }
}
    return(
        <>
         <div className='tab'>
         <Button  onClick={(event) => {
                navigate("/home")
        }}>BACK</Button>
        </div>
        <div className='login-container'>   
                <Form className='login-form'>
                <h2>Update Movie</h2>
                    <Form.Group  controlId='movieId'  >
                        <Form.Label column sm='2'>Movie Id: </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter Movie Id'
                        onChange={(event) => {
                            setMovieId(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group  controlId='movieName'  >
                        <Form.Label column sm='2'>Movie Name: </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter Movie Name'
                        onChange={(event) => {
                            setMovieName(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group  controlId='TheatreName'  >
                        <Form.Label column sm='2'>Theatre Name: </Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter Theatre Name'
                        onChange={(event) => {
                            setTheatreName(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    </Form.Group>
                    <div className='button-group'>
                    <Button type='submit' onClick={addMovies} >Update Movie</Button>
                    </div>
                    </Form>
        </div>
        </>
    )
}
export default AddMovieFunc;