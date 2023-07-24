import {React} from 'react';
import fullscreen from '../common/cine1.png';
import { useNavigate } from 'react-router-dom';

function Signup(){
    const navigate = useNavigate();
    return(
        <>
         <div className='tab'>
           <h3> <button  onClick={(event) => {
                navigate("/registration")
           }}>SIGNUP</button></h3>

           <button onClick={(event) => {
                navigate("/login")
           }}>LOGIN</button>
            <h3 class="leftnav">ONLINE TICKET BOOKING</h3>
           </div>
        <div>
            <img class="image" src={fullscreen}/>
        </div> 
        </> 
    ); 

}

export default Signup;