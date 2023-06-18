package com.example.withus.dao;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Item;

public interface ItemDao {
	void insertItem(Item item) throws DataAccessException;
}
