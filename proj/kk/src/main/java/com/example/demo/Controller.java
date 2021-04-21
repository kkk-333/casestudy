package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	UserInterface u;
	
	
	
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/add")
	public void addUser(@RequestBody User u)
	{
		u.setId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));
	service.addUser(u);	
	}
	
	
	/*
	 * @RequestMapping(method=RequestMethod.POST,value="/login") public List<User>
	 * logincheck(@RequestBody User user) { return
	 * u.findByMailAndPassword(user.getMail(), user.getPassword()); }
	 */
	  
	  
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Map<String, Boolean> customerLogin(@RequestBody User use) {
		Map<String, Boolean> userMap = new HashMap<>();
		Boolean isLoginSuccessful = service.customerLogin(use);
		userMap.put("isLoginSuccessful", isLoginSuccessful);
		return userMap;
	}
	 

	@RequestMapping(method=RequestMethod.DELETE,value="/delete/{id}")
	public void deluser(@PathVariable Long id)
	{
	u.deleteById(id);	
	}
	

	@RequestMapping(method=RequestMethod.GET,value="/users")
	public List<User> usersall() {
		return u.findAll();
	}
	
	
	@RequestMapping(method=RequestMethod.PUT,value="/update/{id}")
	public void update(@PathVariable (value="id") Long userid, @RequestBody User userdetails){
	
		Optional<User> optionalEntity = u.findById(userid);
		
		User usered = optionalEntity.get();
		
		
		usered.setFirstname(userdetails.getFirstname());
		usered.setLastname(userdetails.getLastname());
		usered.setMobile(userdetails.getMobile());
		usered.setMail(userdetails.getMail());
		usered.setPassword(userdetails.getPassword());
	u.save(usered);
		//return ResponseEntity.ok(updated);
		
			
	}
	
	
	
	
	}
	

