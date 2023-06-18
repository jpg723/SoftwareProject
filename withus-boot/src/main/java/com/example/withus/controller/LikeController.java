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
import com.example.withus.domain.Like;
import com.example.withus.domain.Order;
import com.example.withus.service.DonationOrdersService;
import com.example.withus.service.LikeService;

@RestController
@SessionAttributes("like")
public class LikeController {

   @Autowired
   private LikeService likeService;
   
    //공동구매 찜하기
    @GetMapping(value="/groupItem/like/{id}/{user_id}") 
      public void GroupItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id)  {
       
       Like like = new Like();       
       like.setGroupItem_id(id);
       like.setUser_id(user_id);
       Date day = new Date();
       like.setLike_date(day);
       
       likeService.insertGroupItemLike(like);
      }
    
       //공동구매 찜하기 취소
       @GetMapping(value="/groupItem/like/cancel/{id}/{user_id}") 
       public void CancelGroupItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id) 
       {
    	   Like like = new Like();       
           like.setGroupItem_id(id);
           like.setUser_id(user_id);
           Date day = new Date();
           like.setLike_date(day);
           
           likeService.removeGroupItemLike(like); 
       }
       
       //생필품 찜하기 취소
       @GetMapping(value="/Item/like/cancel/{id}/{user_id}") 
       public void CancelItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id) 
       {
    	   Like like = new Like();       
           like.setItem_id(id);
           like.setUser_id(user_id);
           Date day = new Date();
           like.setLike_date(day);
           
           likeService.removeItemLike(like); 
       }
         
       
    //생필품 찜하기
    @GetMapping(value="/Item/{id}/{user_id}/like") 
      public void ItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id)  {
       
       Like like = new Like();
       
       like.setItem_id(id);
       like.setUser_id(user_id);
       Date day = new Date();
       like.setLike_date(day);
       
       likeService.insertItemLike(like);
      }
   
   //공동구매 찜하기 취소
   /*
    * @GetMapping(value="/Item/{id}/like/cancel") public void CancelItemLike
    * (@PathVariable(value="id") int id) { likeService.removeItemLike(id); }
    */
}