package com.example.withus.domain;

import java.io.Serializable;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.springframework.beans.support.PagedListHolder;

@SuppressWarnings("serial")
public class Cart implements Serializable {

  /* Private Fields */

  private int cart_id;
  private int groupItem_id;
  private int quantity;
  private int inStock;
  private String user_id;
  
public int getCart_id() {
	return cart_id;
}
public int getGroupItem_id() {
	return groupItem_id;
}
public int getQuantity() {
	return quantity;
}
public int getInStock() {
	return inStock;
}
public String getUser_id() {
	return user_id;
}
@Override
public String toString() {
	return "Cart [cart_id=" + cart_id + ", groupItem_id=" + groupItem_id + ", quantity=" + quantity + ", inStock="
			+ inStock + ", user_id=" + user_id + "]";
} 

  /* JavaBeans Properties */
 
}
