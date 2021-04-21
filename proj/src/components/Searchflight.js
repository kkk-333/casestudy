import React, {Component} from 'react';
import axios from 'axios';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap'
import MyToast from './Mytoast';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
export default class Searchflight extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            addflights : []
        };

    }
    componentDidMount()
    {
        this.findAllFlights();
    }

    findAllFlights()
    {
        axios.post("http://localhost:9001/api/search/{props.from}/{props.to}/{props.date}")
        .then(response => response.data)
        .then((data) => {
            this.setState({addflights: data});
        });
    }
    deleteFlight = (id) =>

    {
       axios.delete("http://localhost:9001/api/delete/"+id)
       .then(response => 
        {
            if(response.data != null)
            {
                this.setState({"show":true}); 
                         setTimeout(()=> this.setState({"show":false}), 3000);
                
                this.setState({
                    addflights: this.state.addflights.filter(addflight => addflight.id !== id)
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
                <MyToast show={ this.state.show} message={" addflight Deleted Succesfully "} type={"danger"}/>
                </div>
                <Card className = {"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon = {faList} /> Flight List</Card.Header>
                <Card.Body>
                <Table  bordered hover striped variant="dark">
  <thead>
    <tr>
     
      <th>Id</th>
      <th>AirLine</th>
      <th>From</th>
      <th>To</th>
      <th>Date</th>
      <th>Start</th>
      <th>Reach</th>
      <th>Fare</th>
      <th>Seat Count</th>
     <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.state.addflights.length === 0 ?
      <tr align="center">
    <td colSpan="10"> No flights Available</td>
    </tr>:
    this.state.addflights.map((addflight) => (
        <tr key= {addflight.id}>
            <td>{addflight.id}</td>
            <td>{addflight.airline}</td>
            <td>{addflight.from}</td>
            <td>{addflight.to}</td>
            <td>{addflight.date}</td>
            <td>{addflight.start}</td>
            <td>{addflight.reach}</td>
            
            <td>{addflight.fare}</td>
            <td>{addflight.seatcount}</td>
            <td>
                <ButtonGroup>
                    
                <Link to={"update/"+addflight.id} className="btn btn-sm btn-outline-primary"> <FontAwesomeIcon icon = {faEdit} /> </Link>{''}

                  {/* <Button size = "sm" variant="outline-primary">
                    <FontAwesomeIcon icon = {faEdit} /> 

                    </Button>*/}
                 
                    <Button size = "sm" variant="outline-danger" onClick={this.deleteFlight.bind(this,addflight.id)}>
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