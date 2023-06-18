package com.example.withus.domain;

import java.util.Date;

public class DonationOrders {
	
	 private String user_id;
	 private double donation_price;
	 private int donation_state;
	 private Date donationadd_date;
	 private int donation_id;
	 private String comments;
	 private int donation_orderid;
	 
	 public int getDonation_orderid() {
		return donation_orderid;
	}
	public void setDonation_orderid(int donation_orderid) {
		this.donation_orderid = donation_orderid;
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
	public int getDonation_state() {
		return donation_state;
	}
	public void setDonation_state(int donation_state) {
		this.donation_state = donation_state;
	}
	public Date getDonationadd_date() {
		return donationadd_date;
	}
	public void setDonationadd_date(Date donationadd_date) {
		this.donationadd_date = donationadd_date;
	}
	public int getDonation_id() {
		return donation_id;
	}
	public void setDonation_id(int donation_id) {
		this.donation_id = donation_id;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public DonationOrders() {
		super();
	}
	
	
	 
}
