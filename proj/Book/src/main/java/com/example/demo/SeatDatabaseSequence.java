package com.example.demo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "seatno_sequences")
public class SeatDatabaseSequence {

    @Id
    private String seatno;

    private long seqq;

    public SeatDatabaseSequence() {}

	public String getSeatno() {
		return seatno;
	}

	public void setSeatno(String seatno) {
		this.seatno = seatno;
	}

	public long getSeqq() {
		return seqq;
	}

	public void setSeqq(long seqq) {
		this.seqq = seqq;
	}

    

    
}
