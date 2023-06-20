package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.SearchDao;
import com.example.withus.dao.mybatis.mapper.SearchMapper;
import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Search;


@Repository
public class MybatisSearchDao implements SearchDao {
	@Autowired
	private SearchMapper searchMapper;

	@Override
	public List<Item> getSearchItemList(String title) throws DataAccessException {
		return searchMapper.getSearchItemList(title);
	}

	@Override
	public List<GroupItem> getSearchGroupItemList(String title) throws DataAccessException {
		return searchMapper.getSearchGroupItemList(title);
	}

	@Override
	public List<Donation> getSearchDonationList(String title) throws DataAccessException {
		return searchMapper.getSearchDonationList(title);
	}



	
}
