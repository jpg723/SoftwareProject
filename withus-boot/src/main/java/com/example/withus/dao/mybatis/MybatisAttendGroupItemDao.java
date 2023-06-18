package com.example.withus.dao.mybatis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.withus.dao.AttendGroupItemDao;
import com.example.withus.dao.GroupItemDao;
import com.example.withus.dao.mybatis.mapper.AttendGroupItemMapper;
import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Order;

@Repository
public class MybatisAttendGroupItemDao implements AttendGroupItemDao {
   @Autowired
   private AttendGroupItemMapper attendGroupItemMapper;

   @Override
   public AttendGroupItem getGroupItem(int attend_group_id) throws DataAccessException {
      return attendGroupItemMapper.getGroupItem(attend_group_id);
   }

   @Override
   public void insertAttendGroupItem(AttendGroupItem attendGroupItem) throws DataAccessException {
      attendGroupItemMapper.insertAttendGroupItem(attendGroupItem);
   }

   @Override
   public List<AttendGroupItem> getAttendGroupItemList() throws DataAccessException {
      return attendGroupItemMapper.getAttendGroupItemList();
   }

   @Override
   public List<AttendGroupItem> attendLists(int groupItem_id) throws DataAccessException {
      return attendGroupItemMapper.attendLists(groupItem_id);
   }

   @Override
   public void updateTotalCount(int attend_group_id) throws DataAccessException {
      attendGroupItemMapper.updateTotalCount(attend_group_id);      
   }

   
}