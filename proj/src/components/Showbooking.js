import React, {Component} from 'react';
import axios from 'axios';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap'
import MyToast from './Mytoast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
export default class Showbooking extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            bookings : []
        };

    }
    componentDidMount()
    {
        this.findAllBookings();
    }

    findAllBookings()
    {
        axios.get("http://localhost:9002/api/bookings")
        .then(response => response.data)
        .then((data) => {
            this.setState({bookings: data});
        });
    }
    deleteUser = (id) =>

    {
       axios.delete("http://localhost:9002/api/delete/"+id)
       .then(response => 
        {
            if(response.data != null)
            {
                this.setState({"show":true}); 
                         setTimeout(()=> this.setState({"show":false}), 3000);
                
                this.setState({
                    bookings: this.state.bookings.filter(booking => booking.id !== id)
                });
            }
            else {
                this.setState({"show":false}); 
            
                
            }
        });
    };
    render()
    {
        return(

            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show={ this.state.show} message={" Booking Deleted Succesfully "} type={"danger"}/>
                </div>
                <Card className = {"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon = {faList} /> Bookings List</Card.Header>
                <Card.Body>
                <Table  bordered hover striped variant="dark">
  <thead>
    <tr>
     
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Aadhar</th>
      <th>Mail</th>
      <th>Mobile</th>
      <th>PNR</th>
      <th>Seat No</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.state.bookings.length === 0 ?
      <tr align="center">
    <td colSpan="9"> No Bookings Available</td>
    </tr>:
    this.state.bookings.map((booking) => (
        <tr key= {booking.id}>
            <td>{booking.id}</td>
            <td>{booking.firstname}</td>
            <td>{booking.lastname}</td>
            <td>{booking.aadhar}</td>
            <td>{booking.mail}</td>
            <td>{booking.mobile}</td>
            <td>{booking.pnr}</td>
            <td>{booking.seatno}</td>

            <td>
                <ButtonGroup>
                  {/* <Button size = "sm" variant="outline-primary">
                    <FontAwesomeIcon icon = {faEdit} /> 

                    </Button>
                 */}
                    <Button ize = "sm" variant="outline-danger" onClick={this.deleteUser.bind(this,booking.id)}>
                    <FontAwesomeIcon icon = {faTrash} /> 
                    </Button>
                </ButtonGroup>

            </td>

            </tr>
    )
    )
    }
  </tbody>
</Table>
                </Card.Body>
            </Card>
            
            </div>

            
        )
    }
}