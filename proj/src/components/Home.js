import React from 'react';
import '../css/Home.css';
import {Button,Carousel, Container, Jumbotron,Card} from 'react-bootstrap';
export default class home extends React.Component{
    render()
    {


    var names =['dubai','brazil','khartoum','nairobi','tanzania']
    var cmpts = names.map(name=>{
    return(
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={name+".jpg"} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        )
    })
     
        return(
<>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-500"
      src="airport.jpg"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h3>Kalyan Flights</h3>
      <p>Dont Buy Just Book.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="covid.png"
      alt="Second slide"
      height="500px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="students.jpg"
      alt="Third slide"
      height="500px"
    />

    <Carousel.Caption>
      <h3>Summer Offer For students.</h3>
      <p>To know more about offers click here.<a href="#" style={{textDecoration:"none",color:"white"}}>Click Here</a></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <section id="about" >
      <h1>About</h1>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"20px",padding:"20px"}}>
<div>
     <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Travel-Tour-Business-Logo.png" height="300px"/>
</div>
<div style={{textAlign:"left"}}> 
<p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
</div>
      </div>

  </section>

  <section >
      <h1>Our Destination sites.</h1>
      <div id="cards">
      {cmpts}
      </div>
  </section>
</>
        )
        
    }
}