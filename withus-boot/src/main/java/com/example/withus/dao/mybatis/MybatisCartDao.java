package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.CartDao;
import com.example.withus.dao.mybatis.mapper.CartMapper;
import com.example.withus.domain.Cart;
import com.example.withus.domain.CartItem;


@Repository
public class MybatisCartDao implements CartDao {
	@Autowired
	private CartMapper cartMapper;

	@Override
	public void insertGroupItem(int groupItem_id, String user_id, int quantity) throws DataAccessException {
		cartMapper.insertGroupItem(groupItem_id, user_id, quantity);
		
	}

	@Override
	public Cart getCartItem(String user_id, int quantity) throws DataAccessException {
		// TODO Auto-generated method stub
		return cartMapper.getCartItem(user_id, quantity);
	}

	@Override
	public List<CartItem> getCartItemList(String user_id) throws DataAccessException {
		return cartMapper.getCartItemList(user_id);
	}

	@Override
	public void deleteGroupItem(int cart_id) throws DataAccessException {
		 cartMapper.deleteGroupItem(cart_id);
		
	}


	
}