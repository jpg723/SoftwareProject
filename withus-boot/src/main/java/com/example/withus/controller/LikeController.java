package com.example.withus.controller;

import java.io.Console;
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
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;
import com.example.withus.domain.Order;
import com.example.withus.service.DonationOrdersService;
import com.example.withus.service.GroupItemService;
import com.example.withus.service.ItemService;
import com.example.withus.service.LikeService;

@RestController
@SessionAttributes("like")
public class LikeController {

   @Autowired
   private LikeService likeService;
   @Autowired
   private GroupItemService groupItemService;
   @Autowired
   private ItemService itemService;
   
   //내가 찜한 생필품 조회
   @GetMapping(value="/Items/{user_id}")
   public List<Item> getMyItems (@PathVariable("user_id") String user_id) { 
	   
       List<Item> ItemIds = likeService.getItemLikes(user_id);
       List<Item> results = new ArrayList<Item>();
       
       System.out.println(ItemIds.size());
       
       for(int i=0; i<ItemIds.size(); i++) {
    	   int id = ItemIds.get(i).getItem_id();
    	   Item Item = itemService.getItem(id);
    	   results.add(Item);
       }
       
       return results;
   }
   
   //내가 찜한 공동구매 상품 조회
   @GetMapping(value="/groupItems/{user_id}")
   public List<GroupItem> getMyGroupItems (@PathVariable("user_id") String user_id) { 
	   
       List<GroupItem> groupItemIds = likeService.getGroupItemLikes(user_id);
       List<GroupItem> results = new ArrayList<GroupItem>();
       
       System.out.println(groupItemIds.size());
       
       for(int i=0; i<groupItemIds.size(); i++) {
    	   int id = groupItemIds.get(i).getGroupItem_id();
    	   GroupItem groupItem = groupItemService.getGroupItem(id);
    	   results.add(groupItem);
       }
       
       return results;
   }
   
   //공동구매 찜하기 조회
   @GetMapping(value="/groupItem/getLike/{id}/{user_id}")
   public List<Like> getGroupItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id) {
	   Like like = new Like();       
       like.setGroupItem_id(id);
       like.setUser_id(user_id);
       Date day = new Date();
       like.setLike_date(day);
       
       return likeService.getGroupItemLike(like);
   }
   
   //공동구매 찜하기 조회
   @GetMapping(value="/Item/getLike/{id}/{user_id}")
   public List<Like> getItemLike (@PathVariable("user_id") String user_id, @PathVariable("id") int id) {
	   Like like = new Like();       
       like.setItem_id(id);
       like.setUser_id(user_id);
       Date day = new Date();
       like.setLike_date(day);
       
       return likeService.getItemLike(like);
   }
   
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