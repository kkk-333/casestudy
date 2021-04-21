import React, {Component} from 'react';
import {Alert, Card, Form, Col, Button, Row} from 'react-bootstrap'
import axios from 'axios';
import MyToast from './Mytoast';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faSave} from '@fortawesome/free-solid-svg-icons';
export default class Addflights extends Component{

constructor(props){
    super(props);
    this.state = this.intialState;
    this.state.show = false;
    this.detailChange =this.detailChange.bind(this);
    this.submitDetails =this.submitDetails.bind(this);

}
    intialState ={
id:'', airline:'', from:'', to:'', date:'', start:'', reach:'', fare:'', seatcount:''
    };

    componentDidMount(){
        const addflightId = +this.props.match.params.id;
        if(addflightId){
            this.findflightbyId(addflightId);
        }
    }

    findflightbyId = (addflightId) =>{
        axios.get("http://localhost:9001/api/showflights/"+addflightId)
            .then(response =>{
                if(response.data != null){
                    this.setState({
                        id: response.data.id,
                        airline: response.data.airline,
                        from: response.data.from,
                        to: response.data.to,
                        date: response.data.date,
                        start: response.data.start,
                        reach: response.data.reach,
                        fare: response.data.fare,
                        seatcount: response.data.seatcount

                    });
                }
            }).catch((error) => {
                console.error("error-"+error)

            });
        
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

        const addflights ={
            id: this.state.id,
            airline: this.state.airline,
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            start: this.state.start,
            reach: this.state.reach,
            fare: this.state.fare,
            seatcount: this.state.seatcount

        };

        axios.post("http://localhost:9001/api/addflight", addflights)
        .then(response => {
           if(response.data != null){
                    this.setState({"show":true, "method":"post"}); 
                         setTimeout(()=> this.setState({"show":false}), 3000);
}
else {
    this.setState({"show":false}); 

    
}
        });
        this.setState(this.intialState);
    };

    updateFlight = event => {
        event.preventDefault();

        const addflights ={
            id: this.state.id,
            airline: this.state.airline,
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            start: this.state.start,
            reach: this.state.reach,
            fare: this.state.fare,
            seatcount: this.state.seatcount

        };

        axios.put("http://localhost:9001/api/addflight", addflights)
        .then(response => {
           if(response.data != null){
                    this.setState({"show":true, "method":"put"}); 
                         event.preventDefault();

        const addflights ={
            id: this.state.id,
            airline: this.state.airline,
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            start: this.state.start,
            reach: this.state.reach,
            fare: this.state.fare,
            seatcount: this.state.seatcount

        };

        axios.post("http://localhost:9001/api/addflight", addflights)
        .then(response => {
           if(response.data != null){
                    this.setState({"show":true}); 
                         setTimeout(()=> this.setState({"show":false}), 3000);
                         setTimeout(()=> this.showFlightsList(), 3000);
}
else {
    this.setState({"show":false}); 

    
}
        });
        this.setState(this.intialState);
 
}
else {
    this.setState({"show":false}); 

    
}
        });
        this.setState(this.intialState);
 
    };

    showFlightsList = () =>{
        return this.props.history.push("/showflights");
    };
render(){
    const {id, airline, from, to, date, start, reach, fare, seatcount} = this.state
    return(
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show={ this.state.show} message= {this.state.method != "put" ? "Updated Succesfully" : "Added Succesfully"} type={"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header> {this.state.id ? "Update the Flight Details" : "Add New Flight Details"} </Card.Header>
            
            <Form onSubmit={this.submitDetails} id="addflightform">
            <Card.Body>
            <Form.Group as={Row} controlId="formHorizontalid">
    <Form.Label column sm={2}>
      Id
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="id" name="id" 
                                        onChange={this.detailChange}
                                    value={id} placeholder="Id" />
      
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalairline">
    <Form.Label column sm={2}>
      AirLine
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="airline" name="airline" 
                                        onChange={this.detailChange}
                                    value={airline} placeholder="AirLine" />
      
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalfrom">
    <Form.Label column sm={2}>
      From
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="from" name="from" 
      onChange={this.detailChange} value={from} placeholder="From" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalto">
    <Form.Label column sm={2}>
      To
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="to" name="to"
       onChange={this.detailChange} value={to} placeholder="To" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontaldate">
    <Form.Label column sm={2}>
    Date
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="date" name="date" 
      onChange={this.detailChange} value={date} placeholder="Date" />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row} controlId="formHorizontalstart">
    <Form.Label column sm={2}>
      Start
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="start" name="start" 
      onChange={this.detailChange} value={start} placeholder="Start" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalreach">
    <Form.Label column sm={2}>
      Reach
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="reach" name="reach" 
      onChange={this.detailChange} value={reach} placeholder="reach" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalfare">
    <Form.Label column sm={2}>
      Fare
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="fare" name="fare" 
      onChange={this.detailChange} value={fare} placeholder="Fare" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalseatcount">
    <Form.Label column sm={2}>
      Seat Count
    </Form.Label>
    <Col sm={5}>
      <Form.Control required autoComplete="off" type="seatcount" name="seatcount" 
      onChange={this.detailChange} value={seatcount} placeholder="SeatCount" />
    </Col>
  </Form.Group>
  
  </Card.Body>
<Card.Footer style={{"textAlign": "right"}}>
  
      <Button size="sm" variant="success" type="submit" ><FontAwesomeIcon icon = {faSave} />{this.state.id ? "Update" : "Add Flight"} </Button>{''}
      <Button size="sm" variant="info" type="button" onClick={this.showFlightsList.bind()}> <FontAwesomeIcon icon = {faList} /> Flight Data</Button>
    
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
