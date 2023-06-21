package com.example.withus.domain;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class MyDonation implements Serializable {

	 //donation에서
	 private int donation_id;
	 private String donation_name;
	 private String img;
	 //donationorders에서
	 private String user_id;
	 private double donation_price;
	 private Date donationadd_date;
	 private String comments;
	 
	 
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public int getDonation_id() {
		return donation_id;
	}
	public void setDonation_id(int donation_id) {
		this.donation_id = donation_id;
	}
	public String getDonation_name() {
		return donation_name;
	}
	public void setDonation_name(String donation_name) {
		this.donation_name = donation_name;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public double getDonation_price() {
		return donation_price;
	}
	public void setDonation_price(double donation_price) {
		this.donation_price = donation_price;
	}
	public Date getDonationadd_date() {
		return donationadd_date;
	}
	public void setDonationadd_date(Date donationadd_date) {
		this.donationadd_date = donationadd_date;
	}
}
