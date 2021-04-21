package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





@Service
public class Services {
	@Autowired
	UserInterface u;
	
	
	public void addUser(User user) {
		
		u.save(user);
		
	}
public void update(User user) {
		
		u.save(user);
		
	}


public boolean customerLogin(User use) {
	try {
		Optional<User> user = u.findByMail(use.getMail());
		return user.isPresent() && user.get().getPassword().equalsIgnoreCase(use.getPassword());
	} catch (Exception e) {
		return false;
	}
}
}
