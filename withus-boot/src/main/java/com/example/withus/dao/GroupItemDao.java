package com.example.withus.dao;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Order;

public interface GroupItemDao {

  //처리 상태
	boolean GroupItemState(int groupItem_id) throws DataAccessException;

  //해당 groupItemId의 groupItem
  GroupItem getGroupItem(int groupItem_id) throws DataAccessException;
  
  //공동구매상품 전체 조회
  List<GroupItem> getGroupItemList() throws DataAccessException;
  
  //찜개수순 정렬
  List<GroupItem> likeRanking() throws DataAccessException;
	
  //마감일순 정렬
  List<GroupItem> closeRanking() throws DataAccessException;
  
  //신상품순 정렬
  List<GroupItem> newProduct() throws DataAccessException;
}