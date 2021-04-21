package com.example.demo;


import java.time.LocalDate;
import java.time.LocalTime;


import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection="Addflights")
public class Addflight {
	
	
	
	@Id
	public long id;
	
	public String airline;
	
	public String from;
	public String to;
	public LocalDate date;
	public String start;
	public String reach;
	public int fare;
	public int seatcount;
	//public String[] travelclasses;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getReach() {
		return reach;
	}
	public void setReach(String reach) {
		this.reach = reach;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	public int getSeatcount() {
		return seatcount;
	}
	public void setSeatcount(int seatcount) {
		this.seatcount = seatcount;
	}

	/*
	 * public String[] getTravelclasses() { return travelclasses; } public void
	 * setTravelclasses(String[] travelclasses) { this.travelclasses =
	 * travelclasses; }
	 */
	public Addflight(long id, String airline, String from, String to, LocalDate date, String start,
			String reach, int fare, int seatcount/* , String[] travelclasses */) {
		super();
		this.id = id;
		this.airline = airline;
		this.from = from;
		this.to = to;
		this.date = date;
		this.start = start;
		this.reach = reach;
		this.fare = fare;
		this.seatcount = seatcount;
		/* this.travelclasses = travelclasses; */
	}
	
		

}
