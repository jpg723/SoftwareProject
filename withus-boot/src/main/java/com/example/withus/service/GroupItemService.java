package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.GroupItem;


public interface GroupItemService {
	  //해당 groupItemId의 groupItem
	  GroupItem getGroupItem(int groupItem_id);
	  
	  //처리 상태
	  boolean GroupItemState(int groupItem_id);

	  //공동구매상품 전체 조회
	  List<GroupItem> getGroupItemList();
	  
	  //찜개수순 조회
	  List<GroupItem> likeRanking();
	  
	  //마감일순 조회
	  List<GroupItem> closeRanking();
	  
	  //신상품순 조회
	  List<GroupItem> newProduct();
	  
}