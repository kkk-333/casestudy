
//import logo from './logo.svg';
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import './App.css';
import Nav from './components/Nav';


import home from './components/Home';
import Signup from  './components/Signup';
import LogIn from  './components/LogIn';
import Addflights from './components/Addflights'
import Showflights from './components/Showflights'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Showuser from './components/Showuser';
import Booking from  './components/Booking';
import Showbooking from  './components/Showbooking';
import Searchflight from './components/Searchflight';
import Search from './components/Search';
//import { Button } from 'react-bootstrap';
function App() {

 
  return (
  
    
    <Router>
      <home/>
    <Nav/>
    
        <Switch>
        <Route path="/" exact component={home}/>
          <Route path="/home" exact component={home}/>
          <Route path="/login" exact component={LogIn}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/showuser" exact component={Showuser}/>
          <Route path="/addflights" exact component={Addflights}/>
          <Route path="/update/:id" exact component={Addflights}/>
          <Route path="/showflights" exact component={Showflights}/>
          <Route path="/booking" exact component={Booking}/>
          <Route path="/showbooking" exact component={Showbooking}/>
          <Route path="/searchflight" exact component={Searchflight}/>
          <Route path="/search" exact component={Search}/>
         
          


        </Switch>

  </Router>
  );
  
  
}

export default App;
