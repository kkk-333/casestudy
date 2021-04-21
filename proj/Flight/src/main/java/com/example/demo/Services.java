package com.example.demo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;



@Service
public class Services {
	@Autowired
	FlightRepo u;
	public void addUser(Addflight user) {
		
		u.save(user);
		
	}
public void update(Addflight user) {
		
		u.save(user);
		
	}
	
public List<Addflight> getFlightBySourceAndDestinationAndDepartureDate(@PathVariable String from, @PathVariable String to, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date)
{
	List<Addflight> list = u.findByFromAndToAndDate(from, to, date);
	
	return list;
		 	
}
	
	
	
}
