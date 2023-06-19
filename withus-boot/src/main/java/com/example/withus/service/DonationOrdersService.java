package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.Donation;
import com.example.withus.domain.DonationOrders;

public interface DonationOrdersService {

	List<DonationOrders> getTotalDonationOrders(String user_id);
	DonationOrders getDonationOrder(String user_id, int donation_id);
	void applyDonationOrder(DonationOrders donationOrders);
	void cancelDonationOrder(String user_id, int donation_id);
	void updateDonationPrice(Donation donation);
	List<DonationOrders> getDonationOrdersForComment(int donation_id);
}
