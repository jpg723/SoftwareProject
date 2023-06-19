package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.DonationDao;
import com.example.withus.dao.DonationOrdersDao;
import com.example.withus.domain.Donation;
import com.example.withus.domain.DonationOrders;
import com.example.withus.domain.GroupItem;

@Service("DonationOrderServiceImpl")
public class DonationOrdersServiceImpl implements DonationOrdersService {

	@Autowired
	private DonationOrdersDao donationOrdersDao;
	@Autowired
	private DonationDao donationDao;
	
	public List<DonationOrders> getTotalDonationOrders(String user_id) {
		return donationOrdersDao.getTotalDonationOrders(user_id);
	}
	public DonationOrders getDonationOrder(String user_id, int donation_id) {
		return donationOrdersDao.getDonationOrder(user_id, donation_id);
	}
	public void applyDonationOrder(DonationOrders donationOrders) {
		donationOrdersDao.applyDonationOrder(donationOrders);
	}
	
	public void cancelDonationOrder(String user_id, int donation_id) {
		donationOrdersDao.cancelDonationOrder(user_id, donation_id);
	}
	public void updateDonationPrice(Donation donation) {
		// TODO Auto-generated method stub
		donationDao.updateDonation(donation);
	}
	
	public List<DonationOrders> getDonationOrdersForComment(int donation_id) {
		// TODO Auto-generated method stub
		return donationOrdersDao.getDonationOrdersForComment(donation_id);
	}

	
}
