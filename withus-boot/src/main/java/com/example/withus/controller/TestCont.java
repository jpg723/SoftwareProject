package com.example.withus.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Date;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.example.withus.domain.Order;
import com.example.withus.service.OrderServiceImpl;


/**
 * @author Juergen Hoeller
 * @since 30.11.2003
 * @modified-by Changsup Park
 */
@Controller
public class TestCont { 

   @Autowired
   DataSource ds;
   
   @Autowired
   OrderServiceImpl orderService;
   
   @RequestMapping(value="/test/{id}", method = RequestMethod.GET)
   public String handleRequest(@PathVariable String id) 
           throws Exception {
      System.out.println("try");
      Order order = new Order();
      order.setUser_id(id);
      Date day = new Date();
      order.setOrder_date(day);
      order.setTotalitem_count(40);
      order.setTotalitem_price(100000);
      order.setShip_status("S");
      order.setGroupitem_id(14);
      orderService.insertOrder(order);
      System.out.println("inserted");     
      return "redirect:/";
   }
   
   @RequestMapping(value="/test/{id}/{name}", method = RequestMethod.GET)
   public String handleRequest2(@PathVariable String id, @PathVariable String name) 
           throws Exception {
      System.out.println(id + ", " + name);
      Connection conn = ds.getConnection();
      PreparedStatement stmt = conn.prepareStatement(
         "INSERT INTO Member (User_ID, USER_Name) VALUES (?, ?)");
      stmt.setString(1, id);
      stmt.setString(2, name);
      stmt.executeUpdate();
      System.out.println("inserted");     
      return "redirect:/";
   }
   
  
}