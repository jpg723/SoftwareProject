package com.example.withus.dao.mybatis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.withus.dao.DonationOrdersDao;
import com.example.withus.dao.mybatis.mapper.DonationOrdersMapper;
import com.example.withus.domain.Donation;
import com.example.withus.domain.DonationOrders;

@Repository
public class MyBatisDonationOrdersDao implements DonationOrdersDao {

	@Autowired
	protected DonationOrdersMapper donationOrdersMapper;
	
	@Transactional
	public
	List<DonationOrders> getTotalDonationOrders(String user_id) throws DataAccessException {
		List<DonationOrders> donationOrdersList = donationOrdersMapper.getTotalDonationOrders(user_id);
		if (donationOrdersList.size() == 0) {	
			return null;
		} else {
			return donationOrdersList;
		}
	}
	
	@Transactional
	public DonationOrders getDonationOrder(String user_id, int donation_id) throws DataAccessException {
		DonationOrders donationOrders = donationOrdersMapper.getDonationOrder(user_id, donation_id);
	    return donationOrders;
	}
	
	@Transactional
	public void applyDonationOrder(DonationOrders donationOrders) throws DataAccessException {
		donationOrdersMapper.applyDonationOrder(donationOrders);
	}
	
	@Transactional
	public void cancelDonationOrder(String user_id, int donation_id) throws DataAccessException {
		donationOrdersMapper.cancelDonationOrder(user_id, donation_id);
	}
	
	@Transactional
	public List<DonationOrders> getDonationOrdersForComment(int donation_id) throws DataAccessException {
		return donationOrdersMapper.getDonationOrdersForComment(donation_id);
	}
}
