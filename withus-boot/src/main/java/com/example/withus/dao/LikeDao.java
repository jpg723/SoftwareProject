package com.example.withus.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;
import com.example.withus.domain.Order;

public interface LikeDao {

	List<Item> getItemLikes(Map<String, Integer> params) throws DataAccessException;

	List<GroupItem> getGroupItemLikes(Map<String, Integer> params) throws DataAccessException;
	 
	void insertItemLike(Like like) throws DataAccessException;

	void insertGroupItemLike(Like like) throws DataAccessException;

	void removeItemLike(Like like) throws DataAccessException;

	void removeGroupItemLike(Like like) throws DataAccessException;
	
	List<Item> rankingItem() throws DataAccessException;
	
	List<GroupItem> rankingGroupItem() throws DataAccessException;
}
