package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.LikeDao;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;
import com.example.withus.domain.Order;
import com.example.withus.dao.mybatis.mapper.LikeMapper;

@Repository
public class MybatisLikeDao implements LikeDao {
	@Autowired
	private LikeMapper likeMapper;
	int id = 0;
	
	@Override
	public List<Like> getItemLike(Like like) throws DataAccessException {
		// TODO Auto-generated method stub
		return likeMapper.getItemLike(like);
	}

	@Override
	public List<Like> getGroupItemLike(Like like) throws DataAccessException {
		// TODO Auto-generated method stub
		return likeMapper.getGroupItemLike(like);
	}
	
	@Override
	public List<Item> getItemLikes(String user_id) throws DataAccessException {
		return likeMapper.getItemLikes(user_id);
	}

	@Override
	public List<GroupItem> getGroupItemLikes(String user_id) throws DataAccessException {
		return likeMapper.getGroupItemLikes(user_id);
	}

	@Override
	public void insertItemLike(Like like) throws DataAccessException {
		updateItemLike(like.getItem_id());
		likeMapper.insertItemLike(like);
	}

	@Override
	public void insertGroupItemLike(Like like) throws DataAccessException {
		updateGroupItemLike(like.getGroupItem_id());
		likeMapper.insertGroupItemLike(like);
	}

	@Override
	public void removeItemLike(Like like) throws DataAccessException {
		minusItemLike(like.getItem_id());
		likeMapper.removeItemLike(like);
	}

	@Override
	public void removeGroupItemLike(Like like) throws DataAccessException {
		minusGroupItemLike(like.getGroupItem_id());
		likeMapper.removeGroupItemLike(like);
	}

	@Override
	public List<Item> rankingItem() throws DataAccessException {
		List<Item> items = likeMapper.rankingItem();
		
		List<Item> rankingItems = null;
		for(int i=0; i<5; i++) {
			rankingItems.add(items.get(i));
		}
		
		return rankingItems;
	}

	@Override
	public List<GroupItem> rankingGroupItem() throws DataAccessException {
		List<GroupItem> groupItem = likeMapper.rankingGroupItem();
		
		List<GroupItem> rankingItems = null;
		for(int i=0; i<5; i++) {
			rankingItems.add(groupItem.get(i));
		}
		
		return rankingItems;
	}

	@Override
	public void updateGroupItemLike(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		likeMapper.updateGroupItemLike(id);
	}
	
	@Override
	public void updateItemLike(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		likeMapper.updateItemLike(id);
	}

	@Override
	public void minusGroupItemLike(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		likeMapper.minusGroupItemLike(id);
	}

	@Override
	public void minusItemLike(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		likeMapper.minusItemLike(id);
	}

	
}
