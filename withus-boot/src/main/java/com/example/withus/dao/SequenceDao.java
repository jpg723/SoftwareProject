package com.example.withus.dao;

import org.springframework.dao.DataAccessException;

public interface SequenceDao {
	public int getNextId(int id) throws DataAccessException;
}
