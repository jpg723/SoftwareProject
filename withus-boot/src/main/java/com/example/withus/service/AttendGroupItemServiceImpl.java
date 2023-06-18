package com.example.withus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.withus.dao.AttendGroupItemDao;
import com.example.withus.domain.AttendGroupItem;



@Service
public class AttendGroupItemServiceImpl implements AttendGroupItemService {

   @Autowired
   private AttendGroupItemDao attendGroupItemDao;
   
   
   @Override
   public void insertAttendGroupItem(AttendGroupItem attendGroupItem) {
      attendGroupItemDao.insertAttendGroupItem(attendGroupItem);
      
   }

   @Override
   public List<AttendGroupItem> getAttendGroupItemList() {
      return attendGroupItemDao.getAttendGroupItemList();
   }

   @Override
   public AttendGroupItem getGroupItem(int attend_group_id) {
      return attendGroupItemDao.getGroupItem(attend_group_id);
   }

   @Override
   public List<AttendGroupItem> attendLists(int groupItem_id) {
      return attendGroupItemDao.attendLists(groupItem_id);
   }

   @Override
   public void updateTotalCount(int attend_group_id) {
      attendGroupItemDao.updateTotalCount(attend_group_id);
   }


   
}