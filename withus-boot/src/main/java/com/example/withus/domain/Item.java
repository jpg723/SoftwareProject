package com.example.withus.domain;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class Item implements Serializable {
  /* Private Fields */
  private int item_id;
  private String item_name;
  private int item_state;
  private String item_detail;
  private Date item_date;
  private int like_count;
  private String user_id;
  private int itemCategory_id;
  private String img;
  
public int getItem_id() {
	return item_id;
}
public void setItem_id(int item_id) {
	this.item_id = item_id;
}
public String getItem_name() {
	return item_name;
}
public void setItem_name(String item_name) {
	this.item_name = item_name;
}
public int getItem_state() {
	return item_state;
}
public void setItem_state(int item_state) {
	this.item_state = item_state;
}
public String getItem_detail() {
	return item_detail;
}
public void setItem_detail(String item_detail) {
	this.item_detail = item_detail;
}
public Date getItem_date() {
	return item_date;
}
public void setItem_date(Date item_date) {
	this.item_date = item_date;
}
public int getLike_count() {
	return like_count;
}
public void setLike_count(int like_count) {
	this.like_count = like_count;
}
public String getUser_id() {
	return user_id;
}
public void setUser_id(String user_id) {
	this.user_id = user_id;
}
public int getItemCategory_id() {
	return itemCategory_id;
}
public void setItemCategory_id(int itemCategory_id) {
	this.itemCategory_id = itemCategory_id;
}


public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
@Override
public String toString() {
	return "Item [item_id=" + item_id + ", item_name=" + item_name + ", item_state=" + item_state + ", item_detail="
			+ item_detail + ", item_date=" + item_date + ", like_count=" + like_count + ", user_id=" + user_id
			+ ", itemCategory_id=" + itemCategory_id + ", img=" + img + "]";
}


  
  

}