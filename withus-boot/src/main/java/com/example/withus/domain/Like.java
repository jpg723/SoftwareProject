package com.example.withus.domain;

import java.io.Serializable;
import java.util.Date;


@SuppressWarnings("serial")
public class Like implements Serializable {

  private int like_id;
  private String user_id;
  private int item_id;
  private int groupItem_id;
  private Date like_date;
  
  public int getLike_id() {
	return like_id;
	}
  
  public void setLike_id(int like_id) {
	this.like_id = like_id;
	}
  
  public String getUser_id() {
	return user_id;
	}
  
  public void setUser_id(String user_id) {
	this.user_id = user_id;
	}
  
  public int getItem_id() {
	return item_id;
	}
  
  public void setItem_id(int item_id) {
	this.item_id = item_id;
	}
  
  public int getGroupItem_id() {
	return groupItem_id;
	}
  
  public void setGroupItem_id(int groupItem_id) {
	this.groupItem_id = groupItem_id;
	}
  
  public Date getLike_date() {
	return like_date;
	}

  public void setLike_date(Date like_date) {
	this.like_date = like_date;
  }

@Override
public String toString() {
	return "Like [like_id=" + like_id + ", user_id=" + user_id + ", item_id=" + item_id + ", groupItem_id="
			+ groupItem_id + ", like_date=" + like_date + "]";
}
	
  
  
  
  

}
