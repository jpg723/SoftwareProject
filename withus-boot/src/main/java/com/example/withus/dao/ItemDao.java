package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Item;

public interface ItemDao {
	void insertItem(Item item) throws DataAccessException;
	
	List<Item> itemList() throws DataAccessException;
	
	Item getItem(int item_id) throws DataAccessException;
	
}
