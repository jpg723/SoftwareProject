package com.example.withus.service;

import java.util.List;
import com.example.withus.domain.Donation;

//@WebService(name = "DonationService") 
public interface DonationService {
	//전체 기부 목록
	List<Donation> getTotalDonations();

	//기부 조회
	Donation getDonation(int donation_id);
	
	//기부 등록
	void registerDonation(Donation donation);
	
	//기부 삭제
	void deleteDonation(int donation_id);
	
	//기부 수정
	void updateDonation(Donation donation);
	
	//기부 좋아요 1~5위
	List<Donation> rankingDonation();
}
