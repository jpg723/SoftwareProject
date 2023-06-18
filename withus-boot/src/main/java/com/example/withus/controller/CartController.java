package com.example.withus.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.withus.domain.CartItem;
import com.example.withus.service.CartService;



@RestController
public class CartController {
   @Autowired
   private CartService cartService;
   
   
   @RequestMapping(value="/cart/insert", method=RequestMethod.POST)
   public void insertGroupItem(@RequestBody Map<String, Object> paramMap) {
       String[] groupItemInfo = new String[3];
       int i = 0;
       for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
          groupItemInfo[i] = pair.getValue().toString();
          System.out.println(groupItemInfo[i]);
            i++;
         }
   
       cartService.insertGroupItem(Integer.parseInt(groupItemInfo[0]), groupItemInfo[1], Integer.parseInt(groupItemInfo[2]));
   }
   
   @GetMapping(value = "/cart/{id}")
   public List<CartItem> carts(@PathVariable("id") String id) {
      
       return cartService.getCartItemList(id);
   }
   
   @GetMapping(value = "/cart/delete/{cart_id}")
   public void deleteGroupItem(@PathVariable("cart_id") int cart_id) {
       cartService.deleteGroupItem(cart_id);
   }
}