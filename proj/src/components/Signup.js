import React, {Component} from 'react';
import {Alert,Card, Form, Col, Button,Row} from 'react-bootstrap'
import axios from 'axios';
import MyToast from './Mytoast';
import {Link} from 'react-router-dom'
export default class Signup extends Component{

constructor(props){
    super(props);
    this.state = this.intialState;
    this.state.show = false;
    this.detailChange =this.detailChange.bind(this);
    this.submitDetails =this.submitDetails.bind(this);

}
    intialState ={
        firstname:'', lastname:'', mail:'', mobile:'', password:''
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

        const signup ={
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mail: this.state.mail,
            mobile: this.state.mobile,
            password: this.state.password

        };

        axios.post("http://localhost:9000/api/add", signup)
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
    const {firstname, lastname, mail, mobile, password} = this.state
    return(
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show={ this.state.show} message={" Account Created Succesfully "} type={"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Sign Up for a new account</Card.Header>
            
            <Form onSubmit={this.submitDetails} id="signupform">
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
  

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="password" name="password" 
      onChange={this.detailChange} value={password} placeholder="Password" />
    </Col>
  </Form.Group>
  </Card.Body>
<Card.Footer style={{"textAlign": "left"}}>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button variant="success" type="submit" >Sign Up</Button>
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
