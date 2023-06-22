package com.example.withus.service;

import java.util.List;


import com.example.withus.domain.Order;


//@WebService(name = "OrderService") 
public interface OrderService {

   //주문 상세보기
   Order getOrder(int order_id);
   
   //주문 전체보기
   List<Order> getOrdersByUserId(String user_id);
   
   //1인 주문하기
   void insertOrder(Order order);
   
   //장바구니에서 문하기
   void insertCartOrder(Order order);
   
   //공동 주문하기
   void insertAttendOrder(Order order);
   
   //주문취소
   int cancelOrder(int order_id);
   
   //주문수정
   void modifyOrderInfo(String order_id);
   
   //총주문갯수
   int userOrderTotal(String user_id);
}