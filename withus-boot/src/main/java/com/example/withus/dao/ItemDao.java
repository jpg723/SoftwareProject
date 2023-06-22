package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;

public interface ItemDao {
	void insertItem(Item item) throws DataAccessException;
	
	List<Item> itemList() throws DataAccessException;
	
	Item getItem(int item_id) throws DataAccessException;
	
	//찜개수순 정렬
	List<Item> likeRanking() throws DataAccessException;
		
//	//마감일순 정렬
//	List<Item> closeRanking() throws DataAccessException;
	  
	//신상품순 정렬
	List<Item> newProduct() throws DataAccessException;
	

	List<Item> itemCategoryList(int itemcategory_id) throws DataAccessException;

	//내가 올린 나눔글 리스트
	List<Item> myItemList(String user_id) throws DataAccessException;
	
	//나눔 종료
	void itemFinish(int item_id) throws DataAccessException;
}
