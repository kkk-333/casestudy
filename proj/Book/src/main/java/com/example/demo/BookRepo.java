package com.example.demo;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepo extends MongoRepository<Booktic, Long> {

	List<Booktic> findBypnr(long pnr);

}
