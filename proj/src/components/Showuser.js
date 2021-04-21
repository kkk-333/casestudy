import React, {Component} from 'react';
import axios from 'axios';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap'
import MyToast from './Mytoast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
export default class Showuser extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            users : []
        };

    }
    componentDidMount()
    {
        this.findAllUsers();
    }

    findAllUsers()
    {
        axios.get("http://localhost:9000/api/users")
        .then(response => response.data)
        .then((data) => {
            this.setState({users: data});
        });
    }
    deleteUser = (id) =>

    {
       axios.delete("http://localhost:9000/api/delete/"+id)
       .then(response => 
        {
            if(response.data != null)
            {
                this.setState({"show":true}); 
                         setTimeout(()=> this.setState({"show":false}), 3000);
                
                this.setState({
                    users: this.state.users.filter(user => user.id !== id)
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
                <MyToast show={ this.state.show} message={" Account Deleted Succesfully "} type={"danger"}/>
                </div>
                <Card className = {"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon = {faList} /> User List</Card.Header>
                <Card.Body>
                <Table  bordered hover striped variant="dark">
  <thead>
    <tr>
     
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Mail</th>
      <th>Mobile</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.state.users.length === 0 ?
      <tr align="center">
    <td colSpan="6"> No Users Available</td>
    </tr>:
    this.state.users.map((user) => (
        <tr key= {user.id}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.mail}</td>
            <td>{user.mobile}</td>
            <td>
                <ButtonGroup>
                  {/* <Button size = "sm" variant="outline-primary">
                    <FontAwesomeIcon icon = {faEdit} /> 

                    </Button>
                 */}
                    <Button ize = "sm" variant="outline-danger" onClick={this.deleteUser.bind(this,user.id)}>
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