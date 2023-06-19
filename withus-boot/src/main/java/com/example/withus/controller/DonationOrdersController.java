package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.withus.domain.Donation;
import com.example.withus.domain.DonationOrders;
import com.example.withus.service.DonationOrdersService;
import com.example.withus.service.DonationService;

@RestController
@SessionAttributes("donationOrders")
public class DonationOrdersController {

	@Autowired
	private DonationOrdersService donationOrdersService;
	@Autowired
	private DonationService donationService;
	
	 @GetMapping(value = "/donation/comments/{id}")
	 public List<DonationOrders> getDonationOrdersForComment (@PathVariable("id") int donation_id) {
	     return donationOrdersService.getDonationOrdersForComment(donation_id);
	 }
	 
	//기부 신청
	@ResponseBody
	 @RequestMapping(value="/donation/order", method=RequestMethod.POST) 
		public void initNewDonationOrders (HttpServletRequest request, @RequestBody Map<String, Object> paramMap)  {
		
		String[] orderInfo = new String[5];
		 int i = 0;
		 for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			 orderInfo[i] = pair.getValue().toString();
			 System.out.println(orderInfo[i]);
				i++;
			}
		 
		 DonationOrders donationOrders = new DonationOrders();
		 donationOrders.setUser_id(orderInfo[3]); 
		 donationOrders.setDonation_price(Integer.parseInt(orderInfo[0]));
		 donationOrders.setDonation_state(Integer.parseInt(orderInfo[1]));
		 donationOrders.setDonation_id(Integer.parseInt(orderInfo[2]));
		 donationOrders.setComments(orderInfo[4]);
		 Date day = new Date();
		 donationOrders.setDonationadd_date(day);
		 donationOrdersService.applyDonationOrder(donationOrders);
		 
		 Donation donation = donationService.getDonation(Integer.parseInt(orderInfo[2]));
		 double newPrice = Integer.parseInt(orderInfo[0]) + donation.getTotalDonationPrice();
		 donation.setTotalDonationPrice(newPrice);
		 donationOrdersService.updateDonationPrice(donation);
		 
		}
	//기부 신청 취소
	//기부 신청 조회
}
