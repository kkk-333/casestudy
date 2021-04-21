import axios from 'axios';

const FLIGHT_API_BASE_URL = "http://localhost:9001/api";

class flightservice{

    getFlights()
    {
        return axios.get(FLIGHT_API_BASE_URL+"/showflights");
    }

    createFlight(flight)
    {
        return axios.post(FLIGHT_API_BASE_URL+"/addFlight",flight);
    }

    getFlightsByFlightNumber(flightNumber)
    {
        return axios.get(FLIGHT_API_BASE_URL+"/flights/"+flightNumber);
    }

    updateFlight(flight, flightNumber){
        return axios.put(FLIGHT_API_BASE_URL+"/updateFlight/"+flightNumber, flight);
    }

    deleteFlight(flightNumber){
        return axios.delete(FLIGHT_API_BASE_URL+"/flight/delete/"+flightNumber)
    }

    getByTakeoffAndLandingAndDepartureDate({from,to,date})
    {
        const url = FLIGHT_API_BASE_URL+"/search/"+from+"/"+to+"/"+date;
        console.log(url);
        return axios.get(url);
    }

}

export default new flightservice();