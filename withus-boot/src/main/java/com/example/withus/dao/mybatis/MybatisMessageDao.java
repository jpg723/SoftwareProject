package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.MessageDao;
import com.example.withus.dao.mybatis.mapper.MessageMapper;
import com.example.withus.domain.Message;



@Repository
public class MybatisMessageDao implements MessageDao {
   @Autowired
   private MessageMapper messageMapper;

@Override
public void insertMessage(Message message) throws DataAccessException {
	messageMapper.insertMessage(message);
	
}

@Override
public List<Message> getMessageList(String receiver_id) throws DataAccessException {
	return messageMapper.getMessageList(receiver_id);
}

@Override
public Message getMessage(int id) throws DataAccessException {
	return messageMapper.getMessage(id);
}

@Override
public void readCheck(int message_id) throws DataAccessException {
	messageMapper.readCheck(message_id);
	
}

  
   
}