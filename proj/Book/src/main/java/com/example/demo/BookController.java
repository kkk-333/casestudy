package com.example.demo;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
	public class BookController {
	@Autowired
		private Services service;
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	private TicSequenceGeneratorService ticsequenceGeneratorService;
	@Autowired
	private SeatSequenceGeneratorService seatSequenceGeneratorService;
	
	@Autowired
	BookRepo u;
	
	
	
	
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/book")
	public void addUser(@RequestBody Booktic booktic)
	{
		booktic.setId(sequenceGeneratorService.generateSequence(Booktic.SEQUENCE_NAME));
		booktic.setPnr(ticsequenceGeneratorService.generateSequencepnr(Booktic.SEQUENCE_NAME1));
		booktic.setSeatno(seatSequenceGeneratorService.generateSequenceseatno(Booktic.SEQUENCE_NAME2));

		service.addUser(booktic);	
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE,value="/delete/{id}")
	public void deluser(@PathVariable Long id)
	{
	u.deleteById(id);	
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/serachpnr/{pnr}")
	public List<Booktic> Show(@RequestBody Booktic booktic)
	{
		return u.findBypnr(booktic.getPnr());
	}
	
	
	
	@RequestMapping(method=RequestMethod.GET,value="/bookings")
	public List<Booktic> bookingsall() {
		return u.findAll();
	}
	
	
	
	}
	

