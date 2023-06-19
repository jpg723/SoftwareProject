package com.example.withus.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import com.example.withus.domain.Donation;
import com.example.withus.domain.DonationOrders;
import com.example.withus.domain.GroupItem;
import com.example.withus.service.DonationService;

@RestController
@SessionAttributes("donation") // session에 저장 및 공유
public class DonationController {
   // @Autowired
   // private PetStoreFacade petStore; //나중에 userService로 바꾸기
   @Autowired
   private DonationService donationService;

   /* 추가(세아) : donation list 조회
   @GetMapping(value = "/donationList")
   public List<Donation> donationList() {
      return donationService.getTotalDonations();
   }*/
   
   //공동구매상품 전체보기
   @GetMapping("/donationList")
   public List<Donation> donationList(){
		/*
		 * List<Donation> donationlist = donationService.getTotalDonations();
		 * System.out.println(donationlist);
		 */
      return donationService.getTotalDonations();

   }

   // 추가(세아) : donation 상세 조회
   @GetMapping(value = "/donationList/detail/{id}")
   public Donation getDonation(@PathVariable("id") int donation_id) {
      return donationService.getDonation(donation_id);
   }  
  

   // 기부 등록 폼
	/*¿
	 * @GetMapping("/donation/register") public String form() { return
	 * "donation/donationForm"; }
	 * 
	 * // 기부 등록
	 * 
	 * @PostMapping(value = "/donation/register") public String
	 * submitDonation(@ModelAttribute("donation") DonationInfo donationInfo,
	 * BindingResult result, SessionStatus status) { // new
	 * DonationInfoValidator().validate(donationInfo, result); //
	 * if(result.hasErrors()) { // return "donation/donationForm"; // }
	 * 
	 * donationService.registerDonation(null); status.setComplete(); return
	 * "/donation/list"; }
	 * 
	 * // 기부 삭제
	 * 
	 * @PostMapping(value = "/donation/{donation_id}/cancel") public String
	 * deleteDonation(@PathVariable("donation_id") int donation_id) {
	 * donationService.deleteDonation(donation_id); return "redirect:/donation"; }
	 */

}