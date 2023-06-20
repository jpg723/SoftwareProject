package com.example.withus.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Member;
import com.example.withus.domain.Message;



public interface MessageDao {
	//메시지 보내기
	void inserMessage(Message message) throws DataAccessException;
	
	//받은 메시지 불러오기
	List<Message> getMessageList(String receiver_id) throws DataAccessException;
	
	//메시지 자세히 보기
	Message getMessage(int id) throws DataAccessException;

}
