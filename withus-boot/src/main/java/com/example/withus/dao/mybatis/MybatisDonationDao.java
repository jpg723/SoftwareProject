package com.example.withus.dao.mybatis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.example.withus.dao.DonationDao;
import com.example.withus.dao.OrderDao;
import com.example.withus.domain.Donation;
import com.example.withus.domain.Item;
import com.example.withus.dao.mybatis.mapper.DonationMapper;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

@Repository
public class MybatisDonationDao implements DonationDao {
	
	@Autowired
	protected DonationMapper donationMapper;

	@Transactional
	public List<Donation> getTotalDonations() throws DataAccessException {
		List<Donation> donationList = donationMapper.getTotalDonations();
		if (donationList.size() == 0) {	
			return null;
		} else {
			return donationList;
		}
	}

	@Transactional
	public Donation getDonation(int donation_id) throws DataAccessException {
		Donation donation = donationMapper.getDonation(donation_id);
	    return donation;
	}

	@Transactional
	public void registerDonation(Donation donation) throws DataAccessException {
		donationMapper.registerDonation(donation);
		
	}

	@Transactional
	public void deleteDonation(int donation_id) throws DataAccessException {
		donationMapper.deleteDonation(donation_id);
	}

	@Transactional
	public void updateDonation(Donation donation) throws DataAccessException {
		donationMapper.updateDonation(donation);
	}

	@Transactional
	public List<Donation> rankingDonation() throws DataAccessException {
	List<Donation> donations = donationMapper.rankingDonation();
		
		List<Donation> rankingdonations = null;
		for(int i=0; i<5; i++) {
			rankingdonations.add(donations.get(i));
		}
		
		return rankingdonations;
	}

	
}