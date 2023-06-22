package com.example.withus.dao.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.withus.domain.Order;

@Mapper
public interface OrderMapper {

  List<Order> getOrdersByUserId(String user_id);

  Order getOrder(int order_id);
  
  void insertOrder(Order order);
  
  void insertCartOrder(Order order);
  
  void insertAttendOrder(Order order);
  
  int cancelOrder(int order_id);
  
  void modifyOrderInfo(String order_id);
  
  int userOrderTotal(String user_id);
  
  int msSqlServerInsertOrder(Order order);
}