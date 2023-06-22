package com.example.withus.domain;

public class MyGroupItems {
	
	//order
	private String user_id;
	private int groupitem_id;
	//groupitem
	private String groupitem_name;
	private String img;
	//attendgroupitem
	private int attend_group_id;
	private String user_name;
	private int totalGroupItem_count;
	private String message;
	
	
	public String getGroupitem_name() {
		return groupitem_name;
	}
	public void setGroupitem_name(String groupitem_name) {
		this.groupitem_name = groupitem_name;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public int getGroupitem_id() {
		return groupitem_id;
	}
	public void setGroupitem_id(int groupitem_id) {
		this.groupitem_id = groupitem_id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getAttend_group_id() {
		return attend_group_id;
	}
	public void setAttend_group_id(int attend_group_id) {
		this.attend_group_id = attend_group_id;
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
		return "MyGroupItems [user_id=" + user_id + ", groupitem_id=" + groupitem_id + ", img=" + img
				+ ", attend_group_id=" + attend_group_id + ", user_name=" + user_name + ", totalGroupItem_count="
				+ totalGroupItem_count + ", message=" + message + "]";
	}
	
	
}
