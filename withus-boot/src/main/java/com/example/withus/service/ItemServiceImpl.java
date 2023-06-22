package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.ItemDao;
import com.example.withus.domain.Item;

@Service
public class ItemServiceImpl implements ItemService {

   @Autowired
   private ItemDao itemDao;

   @Override
   public void insertItem(Item item) {
	   itemDao.insertItem(item);
   }

   @Override
   public List<Item> itemList() {
	   return itemDao.itemList();
   }

   @Override
   public Item getItem(int item_id) {
	   return itemDao.getItem(item_id);
   }

   @Override
   public List<Item> likeRanking() {
	   return itemDao.likeRanking();
   }
//
//   @Override
//   public List<Item> closeRanking() {
//	   // TODO Auto-generated method stub
//	   return itemDao.closeRanking();
//   }

   @Override
   public List<Item> newProduct() {
	   return itemDao.newProduct();
   }

@Override
public List<Item> myItemList(String user_id) {
	return itemDao.myItemList(user_id);
}

@Override
public void itemFinish(int item_id) {
	itemDao.itemFinish(item_id);
}

}