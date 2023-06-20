package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.MessageDao;
import com.example.withus.domain.Message;


@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageDao messageDao;

	@Override
	public void inserMessage(Message message) {
		messageDao.inserMessage(message);
	}

	@Override
	public List<Message> getMessageList(String receiver_id) {
		return messageDao.getMessageList(receiver_id);
	}

	@Override
	public Message getMessage(int id) {
		return messageDao.getMessage(id);
	}
	

}
