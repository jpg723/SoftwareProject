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
         return itemService.itemList();
     }
    
    //나눔상품 찜개수순으로 보기
    @GetMapping(value = "/item/list/like")
    public List<Item> likeRanking() {
    	return itemService.likeRanking();
    }
    
    //나눔상품 최신순으로 보기
    @GetMapping(value = "/item/list/new")
    public List<Item> newProduct() {
    	return itemService.newProduct();
    }
    
  //나눔상품 자세히 보기
    @GetMapping(value = "/item/detail/{item_id}")
     public Item getItem(@PathVariable("item_id") int item_id) {
       Item item = itemService.getItem(item_id);
         return item;
     }
    

    //나눔 카테고리 정렬
    @GetMapping(value = "/item/category/{itemcategory_id}")
    public List<Item> getItemCategory (@PathVariable("itemcategory_id") int itemcategory_id) {
        return itemService.itemCategoryList(itemcategory_id);
    }

    //내가 작성한 나눔상품 리스트
    @GetMapping(value = "/item/list/{user_id}")
    public List<Item> getMyItemList(@PathVariable("user_id") String user_id) {
      return itemService.myItemList(user_id);
    }
    
    //나눔 종료하기
    @GetMapping(value = "/item/finish/{item_id}")
    public void setFinishItemstate(@PathVariable("item_id") int item_id) {
      itemService.itemFinish(item_id);
    }

}
