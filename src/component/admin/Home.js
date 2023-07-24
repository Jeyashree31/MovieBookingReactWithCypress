import {React, useEffect, useState} from 'react';
import axios from 'axios';
import AddMovie from './AddMovie';
import '../../styles/Common.css';
import {  Link } from 'react-router-dom';
import Footer from '../../common/Footer';


function Home(){
    const[movies, setMovies] = useState([]);
    var email=(localStorage.getItem('email'));

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async() => {
        try{
            const response = await axios.get('http://localhost:8081/api/v1.0/moviebooking/all', {
                validateStatus: function (status) {
                    return status >= 200 && status < 303; // default
                  },
                  
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMovies(response.data);
            console.log(movies);
        } catch(error){
            console.error('Error fetching movies:', error);
        }
    } ;

    const deleteMovie = (movieName,movieId) => {
        console.log(movies);
        axios.delete(`http://localhost:8081/api/v1.0/moviebooking/${movieName}/delete/${movieId}/${email}`,{
            headers:{
                'Content-Type': 'application/json',
                'Access-control-allow-origin':"*"
            }
        })
        .then(response => {
            alert("Movie Deleted Successfully")
            console.log("Movie Deleted successfully");
            fetchMovies();
        })
        .catch(error => {
            console.error('Error deleting movie : ', error);
        });
    }
  
    const ticketStatusUpdate = () => {
        {movies.map((movie) => {
            console.log(movie.ticketsAvailable);
            if(movie.ticketsAvailable.toString() ==='0'){
              localStorage.setItem('ticketStatus', "TICKETS SOLD");
            }
            else{
               localStorage.setItem('ticketStatus',"TICKETS AVAILABLE");
            }
            return localStorage.getItem('ticketStatus');
        })}
     }
    var ts=(ticketStatusUpdate());
    
    return(
        <main>
            <AddMovie/>
            <div class="home-container">
            <h2 className='headings'>All Movies</h2>
            <div>
            <table className='table-border'>
                <thead >
                    <tr>
                        <th>Movie ID</th>
                        <th>Movie Name</th>
                        <th>Theater Name</th>
                        <th>Ticket Available</th>
                        <th>Ticket Status</th>
                        <th>Ticket Details</th>
                        <th>Delete Movie</th>
                    </tr>
                </thead>
                <tbody >
                {movies.map((movie) => (
                    <tr key={movie.movieId}>
                        <td>{movie.movieId}</td>
                        <td>{movie.movieName}</td>
                        <td>{movie.theatreName}</td>
                        <td>{movie.ticketsAvailable}</td>
                        <td>{movie.ticketStatus}</td>
                        <td><Link className='button-book'
                        to= {`/bookedTickets/${movie.movieName}`}>
                        Details</Link></td>
                        <td><button onClick={() => deleteMovie(movie.movieName,movie.movieId)}
                         className='button-delete'> Delete </button></td>
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

export default Home;