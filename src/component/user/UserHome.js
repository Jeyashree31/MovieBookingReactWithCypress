import {React, useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/Common.css';
import UserHeader from './UserHeader';
import {  Link } from 'react-router-dom';
import Footer from '../../common/Footer';


function UserHome(){
    const[movies, setMovies] = useState([]);
    const[searchQuery, setSearchQuery] = useState('');
    const[ticketStatus,setTicketStatus]=useState('');
    useEffect(() => {

        fetchMovies();
    }, []);

    const fetchMovies = async() => {
        try{
            const response = await axios.get('http://localhost:8081/api/v1.0/moviebooking/all', 
            {           
                headers: {
                    'Content-Type': 'application/json',
                }
               
            });
            console.log(response)
            setMovies(response.data);
        } catch(error){
            console.error('Error fetching movies:', error);
        }
    } ;
    const handleSearch = async() => {
            const filteredMovie = movies.filter((movie) => 
            movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if(searchQuery.trim() === ""){
            fetchMovies();
        }else{
            setMovies(filteredMovie)

        }
     }

     const ticketStatusUpdate = () => {
        {movies.map((movie) => {
            console.log(movie.ticketsAvailable);
            if(movie.ticketsAvailable.toString() ==='0'){
              localStorage.setItem('ticketStatus', "TICKETS SOLD");
            }
            else{
               localStorage.setItem('ticketStatus',"BOOK ASAP");
            }
            return localStorage.getItem('ticketStatus');
        })}
     }
    var ts=(ticketStatusUpdate());
    return(
        <main>
         <div className='home-container'>
           <UserHeader/>
           <div className='search-bar'> 
            <input 
            type="text"
            placeholder='Search Movies'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <button onClick={handleSearch}>Search</button>
        </div>
            <h2 className='headings'>All Movies</h2>
            <div>
            <table className='table-border'>
                <thead >
                    <tr>
                        <th>Movie Name</th>
                        <th>Theater Name</th>
                        <th>Ticket Available</th>
                        <th>Ticket Status</th>
                        <th>BOOK</th>
                    </tr>
                </thead>
                <tbody >
                {movies.map((movie) => (
                    <tr key={movie.movieName}>
                        <td>{movie.movieName}</td>
                        <td>{movie.theatreName}</td>
                        <td>{movie.ticketsAvailable}</td>
                        <td>{movie.ticketStatus}</td>
                        <td><Link className='button-book'
                        to= {`/bookingPage/${movie.movieName}/${movie.theatreName}/${movie.ticketsAvailable}`}>
                        BOOK NOW</Link></td>
                        </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div class="footerHome">
                <Footer/>
            </div>
            </div>
        </main>
    );
};

export default UserHome;