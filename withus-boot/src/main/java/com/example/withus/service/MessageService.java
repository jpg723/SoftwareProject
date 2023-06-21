package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;
import com.example.withus.domain.Message;

public interface MessageService {
	 //메시지 보내기
	void insertMessage(Message message);
	
	//받은 메시지 불러오기
	List<Message> getMessageList(String receiver_id);
	
	//메시지 자세히 보기
	Message getMessage(int id);
	
	//읽음 체크
	void readCheck(int message_id);
}
