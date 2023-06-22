package com.example.withus.dao.mybatis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.ItemDao;
import com.example.withus.domain.Item;
import com.example.withus.dao.mybatis.mapper.ItemMapper;

@Repository
public class MybatisItemDao implements ItemDao {
	@Autowired
	private ItemMapper itemMapper;

	@Override
	public void insertItem(Item item) throws DataAccessException {
		itemMapper.insertItem(item);
	}

	@Override
	public List<Item> itemList() throws DataAccessException {
		return itemMapper.itemList();
	}

	@Override
	public Item getItem(int item_id) throws DataAccessException {
		return itemMapper.getItem(item_id);
	}

	@Override
	public List<Item> likeRanking() throws DataAccessException {
		// TODO Auto-generated method stub
		return itemMapper.likeRanking();
	}

//	@Override
//	public List<Item> closeRanking() throws DataAccessException {
//		// TODO Auto-generated method stub
//		return itemMapper.closeRanking();
//	}

	@Override
	public List<Item> newProduct() throws DataAccessException {
		// TODO Auto-generated method stub
		return itemMapper.newProduct();
	}

	@Override
	public List<Item> myItemList(String user_id) throws DataAccessException {
		return itemMapper.myItemList(user_id);
	}

	@Override
	public void itemFinish(int item_id) throws DataAccessException {
		itemMapper.itemFinish(item_id);
	}
}
