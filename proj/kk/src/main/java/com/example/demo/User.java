package com.example.demo;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="User")
public class User {
	
	@Transient
	public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	public long id;
	public String firstname;
	public String lastname;
	public int mobile;
	public String mail;
	public String password;


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public User(String firstname, String lastname, int mobile, String mail, String password) {
		super();
		
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.mail = mail;
		this.password = password;
	}
	public User() {
		
	}
	
	
	

}
