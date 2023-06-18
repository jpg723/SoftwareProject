package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.GroupItemDao;
import com.example.withus.domain.GroupItem;

@Service("groupItemServiceImpl")
public class GroupItemServiceImpl implements GroupItemService {

	@Autowired
	private GroupItemDao groupItemDao;
	
	@Override
	public GroupItem getGroupItem(int groupItem_id) {
		// TODO Auto-generated method stub
		return groupItemDao.getGroupItem(groupItem_id);
	}

	@Override
	public boolean GroupItemState(int groupItem_id) {
		// TODO Auto-generated method stub
		return groupItemDao.GroupItemState(groupItem_id);
	}

	@Override
	public List<GroupItem> getGroupItemList() {
		// TODO Auto-generated method stub
		return groupItemDao.getGroupItemList();
	}


	
}