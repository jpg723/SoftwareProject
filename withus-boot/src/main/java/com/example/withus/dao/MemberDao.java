package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Member;



public interface MemberDao {
	Member findByIdAndPassword(String user_id, String password) throws DataAccessException;

}
