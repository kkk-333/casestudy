package com.example.demo;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Booktic")
public class Booktic {
	
	@Transient
	public static final String SEQUENCE_NAME = "users_sequence";
	
	@Transient
	public static final String SEQUENCE_NAME1 = "pnr_sequence";
	
	@Transient
	public static final String SEQUENCE_NAME2 = "seatno_sequence";
	
	
	@Id
	public long id;
	
	
	public int passcount;
	public String firstname;
	public String lastname;
	public int aadhar;
	public long mobile;
	public String mail;
	

	public long pnr;
	
	public long seatno;


	
	


	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public int getPasscount() {
		return passcount;
	}



	public void setPasscount(int passcount) {
		this.passcount = passcount;
	}



	public String getFirstname() {
		return firstname;
	}



	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}



	public String getLastname() {
		return lastname;
	}



	public void setLastname(String lastname) {
		this.lastname = lastname;
	}



	public int getAadhar() {
		return aadhar;
	}



	public void setAadhar(int aadhar) {
		this.aadhar = aadhar;
	}



	public long getMobile() {
		return mobile;
	}



	public void setMobile(long mobile) {
		this.mobile = mobile;
	}



	public String getMail() {
		return mail;
	}



	public void setMail(String mail) {
		this.mail = mail;
	}



	public long getPnr() {
		return pnr;
	}



	public void setPnr(long pnr) {
		this.pnr = pnr;
	}



	


	


	public long getSeatno() {
		return seatno;
	}



	public void setSeatno(long seatno) {
		this.seatno = seatno;
	}



	



	public Booktic(long id, int passcount, String firstname, String lastname, int aadhar, long mobile, String mail,
			long pnr, long seatno) {
		super();
		this.id = id;
		this.passcount = passcount;
		this.firstname = firstname;
		this.lastname = lastname;
		this.aadhar = aadhar;
		this.mobile = mobile;
		this.mail = mail;
		this.pnr = pnr;
		this.seatno = seatno;
	}



	public Booktic() {
		
	}



	
	

}
