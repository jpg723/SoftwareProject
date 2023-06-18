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

import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.GroupItem;


@Mapper
public interface AttendGroupItemMapper {

  //해당 attend_group_id의 공동구매참여(AttendGroupItem) 조회
  AttendGroupItem getGroupItem(int attend_group_id);
  
  //공동구매참여 등록
  void insertAttendGroupItem(AttendGroupItem attendGroupItem);
  
  //공동구매상품 전체 조회
  List<AttendGroupItem> getAttendGroupItemList();
  
  //공동구매참여 리스트
  List<AttendGroupItem> attendLists(int groupItem_id);
  
  //공동구매참여 인원수 증가
  void updateTotalCount(int attend_group_id);

}