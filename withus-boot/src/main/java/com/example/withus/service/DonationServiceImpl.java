package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.domain.Donation;
import com.example.withus.dao.DonationDao;



@Service("DonationServiceImpl")
public class DonationServiceImpl implements DonationService {

	@Autowired
	private DonationDao donationDao;

	public List<Donation> getTotalDonations() {
		return donationDao.getTotalDonations();
	}

	public Donation getDonation(int donation_id) {
		return donationDao.getDonation(donation_id);
	}

	public void registerDonation(Donation donation) {
		donationDao.registerDonation(donation);
	}

	public void deleteDonation(int donation_id) {
		donationDao.deleteDonation(donation_id);
	}

	public void updateDonation(Donation donation) {
		donationDao.updateDonation(donation);
	}

	public List<Donation> rankingDonation() {
		return donationDao.rankingDonation();
	}

	

}
