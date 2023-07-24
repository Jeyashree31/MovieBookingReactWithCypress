import {React, useState, useEffect} from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import { useParams } from 'react-router-dom';
import Footer from '../../common/Footer';

function GetAllTickets(){
    const{movieName} = useParams()
    const[email, setEmail ]= useState('');
    const[allTickets, setAllTickets] = useState([]);

    const getAllTickets = async(movieName) => {
        try{
        const response = await axios.get(`http://localhost:8081/api/v1.0/moviebooking/getAllTickets`,{
                        headers:{
                            'Content-Type': 'application/json',
                           }
                    });
                    const data = response.data;
                    setAllTickets(data);
                    console.log(response);
        }
        catch(error){
             console.log("Error in fetching tickets",error)
     }
    }
    
    useEffect(() => {
        getAllTickets();
    }, []);

    return(
        <main>
             <div className='home-container'>
            <AdminHeader/>
            <h2 classname="headings">All Booked Tickets</h2>
            <table className='table-border'>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Movie Name</th>
                        <th>Theatre Name</th>
                        <th>Ticket count</th>
                        <th>Seat Numbers</th>
                    </tr>
                </thead>
                <tbody >
                    {allTickets.map((tickets) => (
                        <tr key={tickets.movieName}>
                            <td>{tickets.email}</td>
                            <td>{tickets.movieName}</td>
                            <td>{tickets.theatreName}</td>
                            <td>{tickets.numberOfTickets}</td>
                            <td>{tickets.seatNumbers.join(",")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="footerHome">
                <Footer/>
            </div>
            </div>
        </main>
    )
}

export default GetAllTickets;