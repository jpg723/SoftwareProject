package com.example.withus.domain;

import java.io.Serializable;


import java.io.Serializable;
import java.util.*;

@SuppressWarnings("serial")
public class AttendGroupItem implements Serializable {
    
	/* Private Fields */
	
	private int attend_group_id;
	private int groupItem_id;
	private String user_id;
	private String user_name;
	private int totalGroupItem_count;
	private String message;
	
	public int getAttend_group_id() {
		return attend_group_id;
	}
	public void setAttend_group_id(int attend_group_id) {
		this.attend_group_id = attend_group_id;
	}
	public int getGroupItem_id() {
		return groupItem_id;
	}
	public void setGroupItem_id(int groupItem_id) {
		this.groupItem_id = groupItem_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public int getTotalGroupItem_count() {
		return totalGroupItem_count;
	}
	public void setTotalGroupItem_count(int totalGroupItem_count) {
		this.totalGroupItem_count = totalGroupItem_count;
	}
	
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "AttendGroupItem [attend_group_id=" + attend_group_id + ", groupItem_id=" + groupItem_id + ", user_id="
				+ user_id + ", user_name=" + user_name + ", totalGroupItem_count=" + totalGroupItem_count + ", message="
				+ message + "]";
	}
	
	
	
	
	
	
}