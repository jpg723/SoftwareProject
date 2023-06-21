package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
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
import com.example.withus.domain.MyDonation;
import com.example.withus.service.DonationOrdersService;
import com.example.withus.service.DonationService;

@RestController
@SessionAttributes("donationOrders")
public class DonationOrdersController {

	@Autowired
	private DonationOrdersService donationOrdersService;
	@Autowired
	private DonationService donationService;
	
	@GetMapping(value = "/myDonation/{user_id}")
	 public List<MyDonation> getMyDonations (@PathVariable("user_id") String user_id) {
		 List<MyDonation> myDonations = new ArrayList<MyDonation>();
		
	     List<DonationOrders> MyDonation1 = donationOrdersService.getTotalDonationOrders(user_id);
	     for(int i = 0; i < MyDonation1.size(); i++) {
	    	 Donation MyDonation2 = donationService.getDonation(MyDonation1.get(i).getDonation_id());
	    	 MyDonation myDonation = new MyDonation();
	    	 myDonation.setDonation_id(MyDonation1.get(i).getDonation_id());
	    	 myDonation.setDonation_name(MyDonation2.getDonation_name());
	    	 myDonation.setImg(MyDonation2.getImg());
	    	 myDonation.setDonationadd_date(MyDonation1.get(i).getDonationadd_date());
	    	 myDonation.setUser_id(user_id);
	    	 myDonation.setDonation_price(MyDonation1.get(i).getDonation_price());
	    	 myDonation.setComments(MyDonation1.get(i).getComments());
	    	 myDonation.setDonation_price(MyDonation1.get(i).getDonation_price());
	    	 myDonations.add(myDonation);
	     }	     
	     return myDonations;
	 }
	 
	
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
