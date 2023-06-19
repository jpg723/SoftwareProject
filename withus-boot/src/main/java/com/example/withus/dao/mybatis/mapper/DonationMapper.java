/*
 *    Copyright 2010-2013 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

package com.example.withus.dao.mybatis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Donation;

@Mapper
public interface DonationMapper {

	List<Donation> getTotalDonations();

	Donation getDonation(int donation_id);
	  
	void registerDonation(Donation donation);
	  
	void deleteDonation(int donation_id);
	  
	void updateDonation(Donation donation);
	  
	//찜개수순 조회
	List<Donation> likeRanking();
	
	//마감일순 조회
	List<Donation> closeRanking(); 
	
	//신상품순 조회
	List<Donation> newProduct(); 
	  
}
