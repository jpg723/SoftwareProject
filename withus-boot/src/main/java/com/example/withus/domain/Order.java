package com.example.withus.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@SuppressWarnings("serial")
public class Order implements Serializable {

  private int order_id;
  private String user_id;
  private int groupitem_id;
  private Date order_date;
  private String address1;
  private String address2;
  private String receiver_name;
  private String receiver_phone;
  private int totalitem_count;
  private double totalitem_price;
  private String ship_status;
  private int order_count;

  //추가
  private int attend_id;

  public int getAttend_id() {
	return attend_id;
  }

  public void setAttend_id(int attend_id) {
	this.attend_id = attend_id;
  }

  public int getOrder_id() {
	return order_id;
	}
  
  public void setOrder_id(int order_id) {
	this.order_id = order_id;
	}
  
  public String getUser_id() {
	return user_id;
	}
  
  public void setUser_id(String user_id) {
	this.user_id = user_id;
	}
  
  public Date getOrder_date() {
	return order_date;
	}
  
  public void setOrder_date(Date order_date) {
	this.order_date = order_date;
	}
  
  public String getAddress1() {
	return address1;
	}
  
  public void setAddress1(String address1) {
	this.address1 = address1;
	}
  
  public String getAddress2() {
	return address2;
	}
  
  public void setAddress2(String address2) {
	this.address2 = address2;
	}
  
  public String getReceiver_name() {
	return receiver_name;
	}
  
  public void setReceiver_name(String receiver_name) {
	this.receiver_name = receiver_name;
	}
  
  public String getReceiver_phone() {
	return receiver_phone;
	}
  
  public void setReceiver_phone(String receiver_phone) {
	this.receiver_phone = receiver_phone;
	}


public int getTotalitem_count() {
	return totalitem_count;
}

public void setTotalitem_count(int totalitem_count) {
	this.totalitem_count = totalitem_count;
}

public double getTotalitem_price() {
	return totalitem_price;
}

public void setTotalitem_price(double totalitem_price) {
	this.totalitem_price = totalitem_price;
}

public String getShip_status() {
	return ship_status;
	}
  
  public void setShip_status(String ship_status) {
	this.ship_status = ship_status;
	}
  

  public int getGroupitem_id() {
	return groupitem_id;
	}

  public void setGroupitem_id(int groupitem_id) {
	this.groupitem_id = groupitem_id;
	}

public void initOrder1(User user, GroupItem groupItem) {
    totalitem_price = groupItem.getGroupItem_price();
    totalitem_count = groupItem.getGroupItem_num();
    ship_status = "P";
  }



public int getOrder_count() {
	return order_count;
}

public void setOrder_count(int order_count) {
	this.order_count = order_count;
}

@Override
public String toString() {
	return "Order [order_id=" + order_id + ", user_id=" + user_id + ", groupitem_id=" + groupitem_id + ", order_date="
			+ order_date + ", address1=" + address1 + ", address2=" + address2 + ", receiver_name=" + receiver_name
			+ ", receiver_phone=" + receiver_phone + ", totalitem_count=" + totalitem_count + ", totalitem_price="
			+ totalitem_price + ", ship_status=" + ship_status + ", order_count=" + order_count + ", attend_id="
			+ attend_id + "]";
}



  
}