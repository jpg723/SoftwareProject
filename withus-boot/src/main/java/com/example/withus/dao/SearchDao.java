package com.example.withus.dao;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;
import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Search;

public interface SearchDao {

	  
	  List<Item> getSearchItemList(String title) throws DataAccessException;
	  
	  List<GroupItem> getSearchGroupItemList(String title) throws DataAccessException;
	  
	  List<Donation> getSearchDonationList(String title) throws DataAccessException;
	 
 
}