package com.example.withus.domain;

import java.io.Serializable;


import java.io.Serializable;
import java.util.*;

@SuppressWarnings("serial")
public class GroupItem implements Serializable {
    
	/* Private Fields */
	
	private int groupItem_id;
	private String groupItem_name;
	private double groupItem_price;
	private int groupItem_stock;
	private String groupItem_detail;
	private int groupItem_num;
	private int groupItem_state;
	private int groupItem_rate;
	private Date groupItem_createDate;
	private Date groupItem_closeDate;
	private int like_count;
	private String img;
	
    /* JavaBeans Properties */
	
	public int getGroupItem_id() {
		return groupItem_id;
	}
	public void setGroupItem_id(int groupItem_id) {
		this.groupItem_id = groupItem_id;
	}
	public String getGroupItem_name() {
		return groupItem_name;
	}
	public void setGroupItem_name(String groupItem_name) {
		this.groupItem_name = groupItem_name;
	}
	public int getGroupItem_stock() {
		return groupItem_stock;
	}
	public void setGroupItem_stock(int groupItem_stock) {
		this.groupItem_stock = groupItem_stock;
	}
	public String getGroupItem_detail() {
		return groupItem_detail;
	}
	public void setGroupItem_detail(String groupItem_detail) {
		this.groupItem_detail = groupItem_detail;
	}
	public int getGroupItem_num() {
		return groupItem_num;
	}
	public void setGroupItem_num(int groupItem_num) {
		this.groupItem_num = groupItem_num;
	}
	public int getGroupItem_state() {
		return groupItem_state;
	}
	public void setGroupItem_state(int groupItem_state) {
		this.groupItem_state = groupItem_state;
	}
	public int getGroupItem_rate() {
		return groupItem_rate;
	}
	public void setGroupItem_rate(int groupItem_rate) {
		this.groupItem_rate = groupItem_rate;
	}
	public Date getGroupItem_createDate() {
		return groupItem_createDate;
	}
	public void setGroupItem_createDate(Date groupItem_createDate) {
		this.groupItem_createDate = groupItem_createDate;
	}
	public Date getGroupItem_closeDate() {
		return groupItem_closeDate;
	}
	public void setGroupItem_closeDate(Date groupItem_closeDate) {
		this.groupItem_closeDate = groupItem_closeDate;
	}
	public int getLike_count() {
		return like_count;
	}
	public void setLike_count(int like_count) {
		this.like_count = like_count;
	}
	public double getGroupItem_price() {
		return groupItem_price;
	}
	public void setGroupItem_price(double groupItem_price) {
		this.groupItem_price = groupItem_price;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return "GroupItem [groupItem_id=" + groupItem_id + ", groupItem_name=" + groupItem_name + ", groupItem_price="
				+ groupItem_price + ", groupItem_stock=" + groupItem_stock + ", groupItem_detail=" + groupItem_detail
				+ ", groupItem_num=" + groupItem_num + ", groupItem_state=" + groupItem_state + ", groupItem_rate="
				+ groupItem_rate + ", groupItem_createDate=" + groupItem_createDate + ", groupItem_closeDate="
				+ groupItem_closeDate + ", like_count=" + like_count + ", img=" + img + "]";
	}
	
	
	
}