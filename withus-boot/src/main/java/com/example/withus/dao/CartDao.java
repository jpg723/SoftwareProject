package com.example.withus.dao;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;

public interface CartDao {

	  void insertGroupItem(int groupItem_id, String user_id, int quantity) throws DataAccessException;
	  
	  Cart getCartItem(String user_id, int quantity) throws DataAccessException;
	  
	  List<CartItem> getCartItemList(String user_id) throws DataAccessException;
	  
	  void deleteGroupItem(int cart_id) throws DataAccessException;
 
}