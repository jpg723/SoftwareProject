package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.Item;


public interface ItemService {
	void insertItem(Item item);
	
	List<Item> itemList();
	
	Item getItem(int item_id);
	
	List<Item> likeRanking();
	
//	List<Item> closeRanking();
	
	List<Item> newProduct();
	
	List<Item> itemCategoryList(int itemcategory_id);
}