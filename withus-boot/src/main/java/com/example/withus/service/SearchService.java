package com.example.withus.service;

import java.util.List;
import java.util.Map;

import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;




public interface SearchService {
	
	List<Item> getSearchItemList(String title);
	  
	  List<GroupItem> getSearchGroupItemList(String title);
	  
	  List<Donation> getSearchDonationList(String title);

}
