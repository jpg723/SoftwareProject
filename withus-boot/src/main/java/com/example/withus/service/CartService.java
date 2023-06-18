package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;

public interface CartService {
	void insertGroupItem(int groupItem_id, String user_id, int quantity);
	  
	  Cart getCartItem(String user_id, int quantity);
	  
	  List<CartItem> getCartItemList(String user_id);
	  
	  void deleteGroupItem(int cart_id);
}
