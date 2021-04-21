package com.example.demo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
	public class Controller {
	@Autowired
		private Services service;
	
	@Autowired
	FlightRepo u;
	
	
	
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/addflight")
	public void addUser(@RequestBody Addflight u)
	{
	
	service.addUser(u);	
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/showflights")
	public List<Addflight> flightsall() {
		return u.findAll();
	}
	@RequestMapping(method=RequestMethod.GET,value="/showflights/{id}")
	public Optional<Addflight> flightsall(@PathVariable Long id) {
		return u.findById(id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/delete/{id}")
	public void deluser(@PathVariable Long id)
	{
	u.deleteById(id);	
	}
	
	/*public List<Addflight> Search(String from, String to, String date){
		
		List<Addflight> addflights = u.findBy(from, to, date);
		return addflights; 
	}*/
	
	/*
	 * @PostMapping("/search/{from}/{to}/{date}") public List<Addflight>
	 * Show(@RequestBody Addflight addflight) { return
	 * u.findByFromAndToAndDate(addflight.getFrom(), addflight.getTo(),
	 * addflight.getDate()); }
	 */
	 
	@GetMapping("/search/{from}/{to}/{date}") 
	public ResponseEntity<?> getFlightByTakeoffLandingDepartureDate(@PathVariable String from, @PathVariable String to, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
	    return ResponseEntity.ok(service.getFlightBySourceAndDestinationAndDepartureDate(from, to, date)); 
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/update/{id}")
	public void update(@PathVariable (value="id") Long userid, @RequestBody Addflight userdetails){
	
		Optional<Addflight> optionalEntity = u.findById(userid);
		
		Addflight usered = optionalEntity.get();
		
		
		usered.setId(userdetails.getId());
		usered.setAirline(userdetails.getAirline());
		usered.setFrom(userdetails.getFrom());
		usered.setTo(userdetails.getTo());
		usered.setDate(userdetails.getDate());
		usered.setStart(userdetails.getStart());
		usered.setReach(userdetails.getReach());
		usered.setFare(userdetails.getFare());
		usered.setSeatcount(userdetails.getSeatcount());
		/* usered.setTravelclasses(userdetails.getTravelclasses()); */
	u.save(usered);
		//return ResponseEntity.ok(updated);
		
			
	}
	
	
	
	
	}
	

