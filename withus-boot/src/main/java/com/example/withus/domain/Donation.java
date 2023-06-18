package com.example.withus.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Donation implements Serializable {

 private int donation_id;
 private String donation_name;
 private double totalDonationPrice;
 private String close_date;
 private int like_count;
 private String donation_detail;
 private int donation_closeState;
 
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
 public double getTotalDonationPrice() {
	return totalDonationPrice;
}
 public void setTotalDonationPrice(double totalDonationPrice) {
	this.totalDonationPrice = totalDonationPrice;
}
 public String getClose_date() {
	return close_date;
}
 public void setClose_date(String close_date) {
	this.close_date = close_date;
}
 public int getLike_count() {
	return like_count;
}
 public void setLike_count(int like_count) {
	this.like_count = like_count;
}
 public String getDonation_detail() {
	return donation_detail;
}
 public void setDonation_detail(String donation_detail) {
	this.donation_detail = donation_detail;
}
 
 
 public int getDonation_closeState() {
	return donation_closeState;
}
 public void setDonation_closeState(int donation_closeState) {
	this.donation_closeState = donation_closeState;
}
@Override
public String toString() {
	return "Donation [donation_id=" + donation_id + ", donation_name=" + donation_name + ", totalDonationPrice="
			+ totalDonationPrice + ", close_date=" + close_date + ", like_count=" + like_count + ", donation_detail="
			+ donation_detail + ", donation_closeState=" + donation_closeState + "]";
}
 

 
 
}