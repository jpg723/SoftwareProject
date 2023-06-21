package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.MemberDao;
import com.example.withus.dao.mybatis.mapper.MemberMapper;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Member;


@Repository
public class MybatisMemberDao implements MemberDao {
	@Autowired
	private MemberMapper memberMapper;

	@Override
	public Member findByIdAndPassword(String user_id, String password) throws DataAccessException {
		// TODO Auto-generated method stub
		return memberMapper.findByIdAndPassword(user_id, password);
	}

	@Override
	public String findId(Member member) throws DataAccessException {
		// TODO Auto-generated method stub
		return memberMapper.findId(member);
	}

	@Override
	public String findPW(Member member) throws DataAccessException {
		// TODO Auto-generated method stub
		return memberMapper.findPW(member);
	}


	
}