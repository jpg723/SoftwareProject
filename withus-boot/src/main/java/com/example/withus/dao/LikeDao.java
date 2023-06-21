package com.example.withus.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;
import com.example.withus.domain.Order;

public interface LikeDao {

	void minusGroupItemLike(int id) throws DataAccessException;
	
	void minusItemLike(int id) throws DataAccessException;
	
	void updateGroupItemLike(int id) throws DataAccessException;
	
	void updateItemLike(int id) throws DataAccessException;
	
	List<Like> getItemLike(Like like) throws DataAccessException;
	
	List<Like> getGroupItemLike(Like like) throws DataAccessException; 
	
	List<Item> getItemLikes(String user_id) throws DataAccessException;

	List<GroupItem> getGroupItemLikes(String user_id) throws DataAccessException;
	 
	void insertItemLike(Like like) throws DataAccessException;

	void insertGroupItemLike(Like like) throws DataAccessException;

	void removeItemLike(Like like) throws DataAccessException;

	void removeGroupItemLike(Like like) throws DataAccessException;
	
	List<Item> rankingItem() throws DataAccessException;
	
	List<GroupItem> rankingGroupItem() throws DataAccessException;
}
