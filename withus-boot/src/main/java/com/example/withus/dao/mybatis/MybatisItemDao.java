package com.example.withus.dao.mybatis;

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

}
