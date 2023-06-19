package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.DonationOrders;

public interface DonationOrdersDao {

	List<DonationOrders> getTotalDonationOrders(String user_id) throws DataAccessException;
	DonationOrders getDonationOrder(String user_id, int donation_id) throws DataAccessException;
	void applyDonationOrder(DonationOrders donationOrders) throws DataAccessException;
	void cancelDonationOrder(String user_id, int donation_id) throws DataAccessException;
	List<DonationOrders> getDonationOrdersForComment(int donation_id) throws DataAccessException;
}
