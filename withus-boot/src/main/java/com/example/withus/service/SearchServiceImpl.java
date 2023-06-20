package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.SearchDao;
import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;



@Service("searchServiceImpl")
public class SearchServiceImpl implements SearchService {

	@Autowired
	private SearchDao searchDao;

	@Override
	public List<Item> getSearchItemList(String title) {
		return searchDao.getSearchItemList(title);
	}

	@Override
	public List<GroupItem> getSearchGroupItemList(String title) {
		return searchDao.getSearchGroupItemList(title);
	}

	@Override
	public List<Donation> getSearchDonationList(String title) {
		return searchDao.getSearchDonationList(title);
	}
	
	

	
}