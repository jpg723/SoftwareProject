package com.example.withus.dao.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import com.example.withus.domain.Donation;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Search;

@Mapper
public interface SearchMapper {

	 List<Item> getSearchItemList(String title);
	  
	  List<GroupItem> getSearchGroupItemList(String title);
	  
	  List<Donation> getSearchDonationList(String title);
  
}
