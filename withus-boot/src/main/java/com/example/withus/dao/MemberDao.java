package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Member;



public interface MemberDao {
	Member findByIdAndPassword(String user_id, String password) throws DataAccessException;
	String findId(Member member) throws DataAccessException;
	String findPW(Member member) throws DataAccessException;
	void updateMember(Member member) throws DataAccessException;
	Member memberInfo(String user_id) throws DataAccessException;
}
