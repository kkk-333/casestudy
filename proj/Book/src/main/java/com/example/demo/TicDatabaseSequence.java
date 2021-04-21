package com.example.demo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "pnr_sequences")
public class TicDatabaseSequence {

    @Id
    private String pnr;

    private long seqq;

    public TicDatabaseSequence() {}

	public String getPnr() {
		return pnr;
	}

	public void setPnr(String pnr) {
		this.pnr = pnr;
	}

	public long getSeqq() {
		return seqq;
	}

	public void setSeqq(long seqq) {
		this.seqq = seqq;
	}

    

    
}
