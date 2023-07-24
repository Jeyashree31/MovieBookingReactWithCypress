import {React} from 'react'
import '../styles/Footer.css'
import { Container, Col, Row } from 'react-bootstrap';
function Footer(){
    return(
        <footer className='footer'>
            <div className='container'>
                <p>&copy; {new Date().getFullYear()} Movie Booking App. All rights reserved</p>
                
            </div>
        </footer>
    )
}
export default Footer;