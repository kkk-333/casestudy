import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Button, Table } from "react-bootstrap";
import flightservice from "../services/Flightservice";

function FlightSearch() {
  const history = useHistory();
  const [flights, setFlights] = useState([]);
  const [airportList, setAirportList] = useState([]);
  const [from, setFlightTakeOffStation] = useState("");
  const [to, setFlightLandingStation] = useState("");

  const [date,setdepartureDate] = useState("");

  useEffect(() => {
    flightservice.getFlights()
      .then((response) => {
        setAirportList(response.data);
        setAirportList(response.data);
      })
      .catch((error) => console.error(`Error :  ${error}`));
  }, []);

  const searchFlights = async(event) => {
    event.preventDefault();
    let search = {
      from,
       to,
       date
    };
   const flightResp=await flightservice.getByTakeoffAndLandingAndDepartureDate(search);
   console.log(flightResp);
      setFlights(flightResp.data);
  };

  const selectFlight = (id) => {
    history.push(`/booking/${id}`);
  };


  return (
    <div>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-4 mb-5 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Search Flights</h4>
              <div className="card-body">
                <form>
                  <br></br>
                  <div className="form-group">
                    <label> Source : </label>
                    <select
                      className="form-control"
                      name="departureAirport"
                      value={from || ""}
                      onChange={(e) => {
                        setFlightTakeOffStation(e.target.value);
                      }}
                    >
                      <option value="">-</option>
                      {airportList.map((flight) => (
                        <option
                          key={flight.id}
                          value={flight.from}
                        >
                          {flight.from}
                        </option>
                      ))}
                    </select>
                  </div>
                  <br></br>

                  <div className="form-group">
                    <label> Destination : </label>
                    <select
                      className="form-control"
                      name="destinatonAirport"
                      value={to || ""}
                      onChange={(e) => {
                        setFlightLandingStation(e.target.value);
                      }}
                    >

                        <option value="">-</option>
                      {airportList.map((flight) => (
                        <option
                          key={flight.id}
                          value={flight.to}
                        >
                          {flight.to}
                        </option>
                      ))}
                     
                    </select>
                  </div>

                  <div className="form-group">
                                   <label>Date:</label>
                                   <input type="date" name="departureDate" className="form-control"
                                   onChange={(e) => {
                                    setdepartureDate(e.target.value);
                                  }}/>
                                   </div>

                  
                  <br></br>
                  <br></br>
                  <div className="text-center">
                    <Button className="btn btn-info" onClick={searchFlights}>
                      Search
                    </Button>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
          {flights.length !== 0 ? (
            <div className="col-lg-8 mb-5 grid-margin">
              <div className="card h-100">
                <h4 className="card-header">
                  Available Flights {from}{" "}
                  {to}
                </h4>
                <div className="card-body">
                  <Table
                    striped
                    bordered
                    hover
                    style={{
                      height: "250px",
                      overflow: "scroll",
                      display: "block",
                    }}
                  >
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
                            {
                                flights.map(
                                    (flight) => (
                                    <tr key={flight.id}>
                                        <td>{flight.id}</td>
                                        <td>{flight.airline}</td>
                                        <td>{flight.from}</td>
                                        <td>{flight.to}</td>
                                        <td>{flight.date}</td>
                                        <td>{flight.start}</td>
                                        <td>{flight.reach}</td>
                                        <td>{flight.fare}</td>
                                        <td>{flight.seatcount}</td>
                                       <td> <button
                              onClick={() => selectFlight(flight.id)}
                              className="btn btn-info"
                            >Select</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                  </Table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;