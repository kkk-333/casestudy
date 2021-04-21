package com.example.demo;

import java.time.LocalDate;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FlightRepo extends MongoRepository<Addflight, Long> {

	List<Addflight> findByFromAndToAndDate(String from, String to, LocalDate date);
	
}
