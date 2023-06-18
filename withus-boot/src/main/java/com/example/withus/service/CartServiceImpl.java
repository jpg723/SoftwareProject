package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.withus.dao.CartDao;
import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartDao cartDao;
	@Override
	public void insertGroupItem(int groupItem_id, String user_id, int quantity) {
		cartDao.insertGroupItem(groupItem_id, user_id, quantity);
		
	}

	@Override
	public Cart getCartItem(String user_id, int quantity) {
		return cartDao.getCartItem(user_id, quantity);
	}

	@Override
	public List<CartItem> getCartItemList(String user_id) {
		// TODO Auto-generated method stub
		return cartDao.getCartItemList(user_id);
	}

	@Override
	public void deleteGroupItem(int cart_id) {
		cartDao.deleteGroupItem(cart_id);
		
	}

	

}
