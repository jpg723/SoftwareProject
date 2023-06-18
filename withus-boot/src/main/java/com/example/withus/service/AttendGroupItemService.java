package com.example.withus.service;

import java.util.List;

import com.example.withus.domain.AttendGroupItem;


public interface AttendGroupItemService {
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