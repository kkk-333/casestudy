import React, {Component} from 'react';
import {Alert,Card, Form, Col, Button,Row} from 'react-bootstrap'
import axios from 'axios';
import MyToast from './Mytoast';
import {Link} from 'react-router-dom'
export default class LogIn extends Component{

  constructor(props)
  {
      super(props);
      this.state={
          user : []
      };

  }
  componentDidMount()
  {
      this.findMe();
  }

  findMe()
  {
      axios.post("http://localhost:9000/api/login")
      .then(response => response.data)
      .then((data) => {
          this.setState({user: data});
      });
  }
render(){
    const { mail, password} = this.state
    return(
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast children={{show: this.state.show, message:" Account Logged in Succesfully "}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Login into your account</Card.Header>
            
            <Form onSubmit={this.submitDetails} id="loginform">
            <Card.Body>
  
  <Form.Group as={Row} controlId="formHorizontalmail">
    <Form.Label column sm={2}>
      Mail
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="mail" name="mail"
       onChange={this.detailChange} value={mail} placeholder="Mail" />
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
      <Button variant="success" type="submit" >Log In</Button>
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
