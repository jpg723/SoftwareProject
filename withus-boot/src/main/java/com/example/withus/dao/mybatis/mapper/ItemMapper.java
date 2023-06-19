package com.example.withus.dao.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Item;

@Mapper
public interface ItemMapper {
	void insertItem(Item item);
  
	List<Item> itemList();
  
	Item getItem(int item_id);

	List<Item> likeRanking();

//	List<Item> closeRanking();
	
	List<Item> newProduct();
}
