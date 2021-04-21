package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInterface extends MongoRepository<User, Long> {
	
	List<User> findByMailAndPassword(String mail, String password);

	Optional<User> findByMail(String mail);
	

	


}
