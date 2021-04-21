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
public class TicSequenceGeneratorService {

    private MongoOperations mongoOperations;

    @Autowired
    public TicSequenceGeneratorService(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public long generateSequencepnr(String seqqName) {

        TicDatabaseSequence counter = mongoOperations.findAndModify(query(where("_pnr").is(seqqName)),
                new Update().inc("seqq",123145), options().returnNew(true).upsert(true),
                TicDatabaseSequence.class);
        return !Objects.isNull(counter) ? counter.getSeqq() : 1;

    }
}
