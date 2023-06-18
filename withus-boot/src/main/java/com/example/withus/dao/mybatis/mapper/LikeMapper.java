/*
 *    Copyright 2010-2013 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

package com.example.withus.dao.mybatis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Item;
import com.example.withus.domain.Like;

@Mapper
public interface LikeMapper {

	List<Like> getGroupItemLike(Like like);
  
  List<Item> getItemLikes(Map<String, Integer> params);
  
  List<GroupItem> getGroupItemLikes(Map<String, Integer> params);

  void insertItemLike(Like like);
  
  void insertGroupItemLike(Like like);
  
  void removeItemLike(Like like);
  
  void removeGroupItemLike(Like like);

  List<Item> rankingItem() throws DataAccessException;
	
  List<GroupItem> rankingGroupItem() throws DataAccessException;
}
