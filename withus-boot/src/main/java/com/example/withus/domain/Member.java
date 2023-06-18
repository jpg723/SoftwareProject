package com.example.withus.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Member implements Serializable{
	
	private String user_id, password, user_name, email, phone, zip, 
			address1, address2, birth;
	private int gender;
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
			
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Member [memberId=");
		builder.append(user_id);
		builder.append(", memberPw=");
		builder.append(password);
		builder.append(", memberName=");
		builder.append(user_name);
		builder.append(", memberEmail=");
		builder.append(email);
		builder.append(", memberPhone=");
		builder.append(phone);
		builder.append(", zip=");
		builder.append(zip);
		builder.append(", address1");
		builder.append(address1);
		builder.append(", address2");
		builder.append(address2);
		builder.append(", gender");
		builder.append(gender);
		builder.append(", birth");
		builder.append(birth);
		builder.append("]");
		return builder.toString();
	}
}

