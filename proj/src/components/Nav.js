import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
 export default class Sign extends React.Component{
    render(){
        return(
         
          <Navbar bg="white">
            <Link to ={""} className="Navbar.Brand">
            <img src ="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Travel-Tour-Business-Logo.png" width= "75" height= "75" alt="brand"/>
            </Link>
           
          
        
          
          <Nav className="mr-auto">
          <Link to ={"home"} className="nav-link">Home</Link>
          <Link to ={"login"} className="nav-link">Log In</Link>
          <Link to ={"signup"} className="nav-link">Sign Up</Link>
          <Link to ={"showuser"} className="nav-link">Show Users</Link>
          <Link to ={"addflights"} className="nav-link">Add Flights</Link>
          <Link to ={"showflights"} className="nav-link">Show Flights</Link>
          <Link to ={"booking"} className="nav-link">Booking</Link>
          <Link to ={"showbooking"} className="nav-link">Show Booking</Link>
          <Link to ={"searchflight"} className="nav-link">Search Flight</Link>
          <Link to ={"search"} className="nav-link">Search</Link>
          
          </Nav> 
          

        
        </Navbar>
        
        )
    }
}