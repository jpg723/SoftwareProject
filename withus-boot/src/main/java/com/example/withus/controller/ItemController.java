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


import com.example.withus.domain.Item;
import com.example.withus.service.ItemService;


@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;
	
	//나눔 등록
    @ResponseBody
    @RequestMapping(value="/item/register", method=RequestMethod.POST) 
      public Item initNewItem(HttpServletRequest request,
            @RequestBody Map<String, Object> paramMap
            )  {
       String[] itemInfo = new String[5];
       int i = 0;
       for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
    	   itemInfo[i] = pair.getValue().toString();
          System.out.println(itemInfo[i]);
            i++;
         }
       Item item = new Item();
       item.setItem_name(itemInfo[0]);
       item.setItem_state(0);
       item.setItem_detail(itemInfo[2]);
       Date day = new Date();
       item.setItem_date(day);
       item.setLike_count(0);
       item.setUser_id(itemInfo[3]);
       item.setItemCategory_id(Integer.parseInt(itemInfo[4]));       
       item.setImg(itemInfo[1]);
      
       itemService.insertItem(item);
       return item;
      }
    
  //나눔상품 전체 리스트
    @GetMapping(value = "/item/list")
     public List<Item> getItemList() {
       List<Item> itemList= itemService.itemList();
         return itemList;
     }
    
  //나눔상품 자세히 보기
    @GetMapping(value = "/item/detail/{item_id}")
     public Item getGroupItem(@PathVariable("item_id") int item_id) {
       Item item = itemService.getItem(item_id);
         return item;
     }
}
