package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.Order;
import com.example.withus.service.AttendGroupItemService;


@RestController
public class AttendGroupItemController {
   @Autowired
   private AttendGroupItemService attendGroupItemService;

   
   //공동구매 방 개설
   @ResponseBody
   @RequestMapping(value="/insertGroup", method=RequestMethod.POST) 
     public AttendGroupItem insertGroup(HttpServletRequest request,
           @RequestBody Map<String, Object> paramMap
           )  {
      String[] orderInfo = new String[4];
      int i = 0;
      for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
         orderInfo[i] = pair.getValue().toString();
         System.out.println(orderInfo[i]);
           i++;
        }
      AttendGroupItem attendGroupItem = new AttendGroupItem();
      attendGroupItem.setUser_id(orderInfo[0]);
      attendGroupItem.setGroupItem_id(Integer.parseInt(orderInfo[1]));
      attendGroupItem.setUser_name(orderInfo[2]); 
      attendGroupItem.setMessage(orderInfo[3]);
      attendGroupItem.setTotalGroupItem_count(1);
      attendGroupItemService.insertAttendGroupItem(attendGroupItem);
      System.out.println(attendGroupItem);
        return attendGroupItem;
     }
  
   //공동구매참여 리스트보기
      @GetMapping(value = "/attendgroupList/{groupItem_id}")
       public List<AttendGroupItem> getAttendGroupList(@PathVariable("groupItem_id") int groupItem_id) {
         List<AttendGroupItem> attendList= attendGroupItemService.attendLists(groupItem_id);
         System.out.println(attendList);
           return attendList;
       }
      
   @GetMapping(value = "/attendgroupList")
    public List<AttendGroupItem> groupList() {
      return attendGroupItemService.getAttendGroupItemList();
    }

   
}