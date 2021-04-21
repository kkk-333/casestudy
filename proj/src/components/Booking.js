import React, {Component} from 'react';
import {Alert,Card, Form, Col, Button,Row} from 'react-bootstrap'
import axios from 'axios';
import MyToast from './Mytoast';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faSave} from '@fortawesome/free-solid-svg-icons';
export default class Booking extends Component{

    constructor(props){
        super(props);
        this.state = this.intialState;
        this.state.show = false;
        this.detailChange =this.detailChange.bind(this);
        this.submitDetails =this.submitDetails.bind(this);
    
    }
        intialState ={
            firstname:'', lastname:'', aadhar:'', mail:'', mobile:'', passcount:''
        }
    detailChange(event)
    {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
        submitDetails = event =>
        {
           
            event.preventDefault();
    
            const booking ={
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                aadhar: this.state.aadhar,
                mail: this.state.mail,
                mobile: this.state.mobile,
                passcount: this.state.passcount
               
    
            };
    
            axios.post("http://localhost:9002/api/book", booking)
            .then(response => {
               if(response.data != null){
                        this.setState({"show":true}); 
                             setTimeout(()=> this.setState({"show":false}), 3000);
    }
    else {
        this.setState({"show":false}); 
    
        
    }
            });
            this.setState(this.intialState);
        }
    render(){
        const {firstname, lastname, aadhar, mail, mobile, passcount} = this.state
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast show={ this.state.show} message={" Details Added Succesfully "} type={"success"}/>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Book a Ticket</Card.Header>
                
                <Form onSubmit={this.submitDetails} id="bookingform">
                <Card.Body>
      <Form.Group as={Row} controlId="formHorizontalfirstname">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="firstname" name="firstname" 
                                            onChange={this.detailChange}
                                        value={firstname} placeholder="First Name" />
          
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontallastname">
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="lastname" name="lastname" 
          onChange={this.detailChange} value={lastname} placeholder="Last Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalaadhar">
        <Form.Label column sm={2}>
          Aadhar
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="aadhar" name="aadhar"
           onChange={this.detailChange} value={aadhar} placeholder="Aadhar" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalmail">
        <Form.Label column sm={2}>
          Mail
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="mail" name="mail"
           onChange={this.detailChange} value={mail} placeholder="Mail" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalmobile">
        <Form.Label column sm={2}>
        Mobile
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="mobile" name="mobile" 
          onChange={this.detailChange} value={mobile} placeholder="Mobile" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalpasscount">
        <Form.Label column sm={2}>
        Count
        </Form.Label>
        <Col sm={5}>
          <Form.Control required autoComplete="off" type="passcount" name="passcount" 
          onChange={this.detailChange} value={passcount} placeholder="Passengers Count" />
        </Col>
      </Form.Group>
      
    
     
      </Card.Body>
    <Card.Footer style={{"textAlign": "left"}}>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="success" type="submit" >Pay And Book</Button>
        </Col>
      </Form.Group>
      </Card.Footer>
    </Form>
               
            </Card>
    {this.state.display&&<Alert variant="success">
      <Alert.Heading>Hey, nice to see you click here to go to login page <Link to="login">login</Link></Alert.Heading>
     
    </Alert>}
              
            </div>
            
        )
    }
    }
