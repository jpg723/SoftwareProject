package com.example.withus.dao;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Order;

public interface AttendGroupItemDao {

   //해당 attend_group_id의 공동구매참여(AttendGroupItem) 조회
     AttendGroupItem getGroupItem(int attend_group_id) throws DataAccessException;
     
     //공동구매참여 등록
     void insertAttendGroupItem(AttendGroupItem attendGroupItem) throws DataAccessException;
     
     //공동구매상품 전체 조회
     List<AttendGroupItem> getAttendGroupItemList() throws DataAccessException;
     
     //공동구매참여 리스트
     List<AttendGroupItem> attendLists(int groupItem_id) throws DataAccessException;
 
     //공동구매참여 인원수 증가
     void updateTotalCount(int attend_group_id) throws DataAccessException;
}