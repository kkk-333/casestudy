package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class Services {
	@Autowired
	BookRepo u;
	public void addUser(Booktic user) {
		
		u.save(user);
		
	}
public void update(Booktic user) {
		
		u.save(user);
		
	}
	
	
}
