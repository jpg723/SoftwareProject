package com.example.withus.domain;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Message implements Serializable{
	private int message_id;
	private String title;
	private String content;
	private String sender_id;
	private String receiver_id;
	private int read_chk;
	public int getMessage_id() {
		return message_id;
	}
	public void setMessage_id(int message_id) {
		this.message_id = message_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getSender_id() {
		return sender_id;
	}
	public void setSender_id(String sender_id) {
		this.sender_id = sender_id;
	}
	public String getReceiver_id() {
		return receiver_id;
	}
	public void setReceiver_id(String receiver_id) {
		this.receiver_id = receiver_id;
	}
	public int getRead_chk() {
		return read_chk;
	}
	public void setRead_chk(int read_chk) {
		this.read_chk = read_chk;
	}
	@Override
	public String toString() {
		return "Message [message_id=" + message_id + ", title=" + title + ", content=" + content + ", sender_id="
				+ sender_id + ", receiver_id=" + receiver_id + ", read_chk=" + read_chk + "]";
	}
	
	
	
	
	
}

