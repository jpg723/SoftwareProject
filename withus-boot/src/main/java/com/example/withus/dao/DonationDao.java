package com.example.withus.dao;

import java.util.List;


import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Donation;
import com.example.withus.domain.Order;

public interface DonationDao {
	List<Donation> getTotalDonations() throws DataAccessException;

	Donation getDonation(int donation_id) throws DataAccessException;
	  
	void registerDonation(Donation donation) throws DataAccessException;
	  
	void deleteDonation(int donation_id) throws DataAccessException;
	  
	void updateDonation(Donation donation) throws DataAccessException;
	  
	List<Donation> rankingDonation() throws DataAccessException;
}
