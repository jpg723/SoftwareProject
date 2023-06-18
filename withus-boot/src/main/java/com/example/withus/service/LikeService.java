package com.example.withus.service;

import java.util.List;
import java.util.Map;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;


//@WebService(name = "LikeService") 
public interface LikeService {
	
	List<Like> getGroupItemLike(Like like);
	
	//생필품 좋아요 목록
	List<Item> getItemLikes(Map<String, Integer> params);

	//공동구매상품 좋아요 목록
	List<GroupItem> getGroupItemLikes(Map<String, Integer> params);
	
	//생필품 좋아요 추가
	void insertItemLike(Like like);

	//공동구매상품 좋아요 추가
	void insertGroupItemLike(Like like);

	//생필품 좋아요 취소
	void removeItemLike(Like like);

	//공동구매상품 좋아요 취소
	void removeGroupItemLike(Like like);
	
	//생필품 좋아요 1~5위
	List<Item> rankingItem();
	
	//공동구매상품 좋아요 1~5위
	List<GroupItem> rankingGroupItem();

}
