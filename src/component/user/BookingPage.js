import {React, useState, useEffect} from 'react';
import UserHeader from './UserHeader';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../styles/Login.css'
import '../../styles/Common.css'
import Footer from '../../common/Footer';
import { Container , Form} from 'react-bootstrap';
function BookingPage(){

    const{movieName, theatreName,noOfTicketsAvailable } = useParams();
    const[bookedSeats, setBookedSeats] = useState([]);
    const[loginId, setLoginId] = useState('');
    const[email, setEmail ]= useState('');
    const[movieNames, setMovieNames] = useState({movieName});
    const[theatreNames, setTheatreNames] = useState({theatreName});
    const[numberOfTickets,setNumberOfTickets]=useState();
    const[seatNumbers,setSeatNumbers]=useState([]);
    const navigate = useNavigate();

  
    const handleChange = (event) =>{
        const {value} = event.target;
        const numbers = value.split(',').map(number => number.trim());
        setSeatNumbers(numbers);
        }



    const handleSubmit = (event) => {
        event.preventDefault();
        var ticketStatus="";
        if(noOfTicketsAvailable.toString() === '0'){
            alert("All Tickets Sold Out")
            navigate('/userHome')
        }
        else{
            console.log(numberOfTickets);
            if(numberOfTickets.toString() > noOfTicketsAvailable.toString()){
                alert(`Only ${noOfTicketsAvailable.toString()} seats available`)
            }else{
        if(numberOfTickets === seatNumbers.length){
            if(bookedSeats.includes(seatNumbers)){
                alert("seat already booked")
            }else{
            axios.post(`http://localhost:8081/api/v1.0/moviebooking/${movieName}/add`,{
            email:localStorage.getItem('email'),
            movieName:movieName,
            theatreName:theatreName,
            numberOfTickets:numberOfTickets,
            seatNumbers:seatNumbers
            }, {
                headers:{
                    'Content-Type': 'application/json'
                   }
            }
            
        )
        .then((response) => {
            console.log(response.data);
            alert("Ticket Booked")
            navigate('/userHome')
        })
        .catch((error) => {
            console.error("Error Booking Tickets:" , error);
        });
    }
        }else{
            alert("Number of Seats Booked is not equal to Number of Tickets selected")
        }
    }}}



    const fetchBookedTickets = async() => {
        try{
            const response = await axios.get(`http://localhost:8081/api/v1.0/moviebooking/getAllTickets`,{
                        headers:{
                            'Content-Type': 'application/json'
                           }
                    });
            const data = response.data;
            const seats = data.flatMap((ticket) => ticket.seatNumber);
            setBookedSeats(seats.toString());
            console.log(seats.toString());
                     
        }catch(error){
            console.log("Error in fetching tickets",error)
        }
    }

    useEffect(() => {
        fetchBookedTickets();
    }, []);
    console.log(localStorage.getItem("email"))
    return(
        <>
        <main>
            <Container>
            <UserHeader/>
            <h2 className='headings'> Book Ticket</h2> 
            <div className='login-container'>                  
                <form onSubmit={handleSubmit} className="login-form">
                    <Form.Group  controlId='loginId'  >
                        <Form.Label column sm='2'> Email/UserName: </Form.Label>
                        
                        <Form.Control
                        type='email'
                        placeholder='Enter Username'
                        value={localStorage.getItem('email')}
                        onChange={(event) => {
                            setLoginId(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    
                    </Form.Group>
                    <Form.Group  controlId='movieNames'  >
                        <Form.Label column sm='2'> Movie Name: </Form.Label>
                        
                        <Form.Control
                        type='text'
                        placeholder='Enter movieNames'
                        value={movieName}
                        onChange={(event) => {
                            setMovieNames(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    
                    </Form.Group>
                    <Form.Group  controlId='theatreNames'  >
                        <Form.Label column sm='2'> Theatre Name: </Form.Label>
                        
                        <Form.Control
                        type='text'
                        placeholder='Enter theatre name'
                        value={theatreName}
                        onChange={(event) => {
                            setTheatreNames(event.target.value);
                        }}
                        required
                        ></Form.Control>
                    
                    </Form.Group>
                    <Form.Group  controlId='numberOfTickets'  >
                        <Form.Label column sm='2'> Number of Tickets: </Form.Label>
                        
                        <Form.Control
                        type='number'
                        placeholder='Enter Number of Tickets'
                        value={numberOfTickets}
                        onChange={(event) => {
                            const {value} = event.target;
                            setNumberOfTickets(Number(value));
                        }}
                        required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group  controlId='seatNumbers'  >
                        <Form.Label column sm='2'> Seat Numbers: </Form.Label>
                        
                        <Form.Control
                        type='text'
                        placeholder='Select Seats'
                        value={seatNumbers.join(',')}
                        onChange={handleChange}
                        required
                        ></Form.Control>
                    
                    </Form.Group>
                <button type='submit' className='button'>Book Ticket</button>
                </form>
            </div>
            </Container> 
        </main>
        <Footer/>
        </>
    );
};

export default BookingPage;