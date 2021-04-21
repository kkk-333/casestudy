import React , {useState} from 'react'
import {Alert,Card, Form, Col, Button,Row} from 'react-bootstrap'
function Login() {
    const [password,setPassword]=useState("")
    const [mail,setMail]=useState("")

    async function loginUser() {
        let item = {mail, password}
        console.warn(item)

       let result = await fetch("http://localhost:9000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.log(result)
        if (result.isLoginSuccessful) {
            alert('Login Success')
        } else {
            alert('Login Failed, Invalid Inputs!')
        }
    } 

    return (
        <div>
          <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>LogIn to your account</Card.Header>
            <br/>
            <Col sm={5}>
            <input type = "text" value={mail} onChange={(e)=>setMail(e.target.value)} className="form-control" placeholder="mail"/>
            </Col>
            <br/>
            <Col sm={5}>
            <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            </Col>
            <br/>
           {/* <Col sm={5}>
            <button onClick={loginUser} className="btn btn-primary">Login</button>
    </Col>*/}
            <Card.Footer style={{"textAlign": "left"}}>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
        <button onClick={loginUser} className="btn btn-primary">Login</button>
        </Col>
      </Form.Group>
      </Card.Footer>
            </Card>
        </div>
    )
}

export default Login