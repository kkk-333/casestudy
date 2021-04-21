package com.example.demo;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class SeatSequenceGeneratorService {

    private MongoOperations mongoOperations;

    @Autowired
    public SeatSequenceGeneratorService(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public long generateSequenceseatno(String seqqName) {

        SeatDatabaseSequence counter = mongoOperations.findAndModify(query(where("_seatno").is(seqqName)),
                new Update().inc("seqq",1), options().returnNew(true).upsert(true),
                SeatDatabaseSequence.class);
        return !Objects.isNull(counter) ? counter.getSeqq() : 1;

    }
}
