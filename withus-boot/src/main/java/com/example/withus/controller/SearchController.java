package com.example.withus.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Search;
import com.example.withus.service.SearchService;



@RestController
public class SearchController {
   @Autowired
   private SearchService searchService;
   
   
   @GetMapping(value = "/search/item/{title}")
   public List<Item> getSearchItemList(@PathVariable("title") String title) {
     List<Item> attendList= searchService.getSearchItemList(title);
     System.out.println(attendList);
       return attendList;
   }
   
   @GetMapping(value = "/search/groupItem/{title}")
   public List<GroupItem> getSearchGroupItemList(@PathVariable("title") String title) {
     List<GroupItem> attendList= searchService.getSearchGroupItemList(title);
     System.out.println(attendList);
       return attendList;
   }
   
   @GetMapping(value = "/search/donation/{title}")
   public List<Donation> getSearchDonationList(@PathVariable("title") String title) {
     List<Donation> attendList= searchService.getSearchDonationList(title);
     System.out.println(attendList);
       return attendList;
   }
}