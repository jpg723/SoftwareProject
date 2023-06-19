package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.GroupItemDao;
import com.example.withus.dao.mybatis.mapper.GroupItemMapper;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Order;

@Repository
public class MybatisGroupItemDao implements GroupItemDao {
	@Autowired
	private GroupItemMapper groupItemMapper;

	@Override //해당 groupItemId의 groupItem
	public boolean GroupItemState(int groupItem_id) throws DataAccessException {
		return groupItemMapper.GroupItemState(groupItem_id);
	}

	@Override //처리 상태
	public GroupItem getGroupItem(int groupItem_id) throws DataAccessException {
		return groupItemMapper.getGroupItem(groupItem_id);
	}
	
	@Override //공동구매상품 전체 조회
	public List<GroupItem> getGroupItemList() {
		// TODO Auto-generated method stub
		return groupItemMapper.getGroupItemList();
	}

	@Override //찜개수순 조회
	public List<GroupItem> likeRanking() throws DataAccessException {
		// TODO Auto-generated method stub
		return groupItemMapper.likeRanking();
	}

	@Override //마감일순 조회
	public List<GroupItem> closeRanking() throws DataAccessException {
		// TODO Auto-generated method stub
		return groupItemMapper.closeRanking();
	}

	@Override //신상품순 조회
	public List<GroupItem> newProduct() throws DataAccessException {
		// TODO Auto-generated method stub
		return groupItemMapper.newProduct();
	}
	

}