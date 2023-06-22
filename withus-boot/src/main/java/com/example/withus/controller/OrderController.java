package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import com.example.withus.domain.AttendGroupItem;
import com.example.withus.domain.GroupItem;
import com.example.withus.domain.MyGroupItems;
import com.example.withus.domain.Order;
import com.example.withus.service.AttendGroupItemService;
import com.example.withus.service.CartService;
import com.example.withus.service.GroupItemService;
import com.example.withus.service.OrderService;
import com.example.withus.service.OrderValidator;


@RestController
@SessionAttributes({"sessionCart", "orderForm"})
public class OrderController {
   //@Autowired
   //private PetStoreFacade petStore; //나중에 userService로 바꾸기
   @Autowired
   private OrderService orderService;
   @Autowired
   private OrderValidator orderValidator;
   @Autowired
   private GroupItemService groupItemService;
   
   @Autowired
   private CartService cartService;
   @Autowired
   private AttendGroupItemService attendGroupItemService;
   
   @GetMapping("/orderTest")
   public String orderTest(Model model, String user) {
      model.addAttribute("user", "users");
      model.addAttribute("groupItem", "items");
      return "/groupItem";
   }
   
   //공동구매상품 전체보기
   @GetMapping("/groupItem")
   public List<GroupItem> groupItemList(){
      List<GroupItem> groupItem = groupItemService.getGroupItemList();
      System.out.println(groupItem);
      return groupItem;
   }
   
   //공동구매상품 자세히 보기
   @GetMapping(value = "/groupItem/detail/{groupItem_id}")
    public GroupItem getGroupItem(@PathVariable("groupItem_id") int groupItem_id) {
      GroupItem groupItem = groupItemService.getGroupItem(groupItem_id);
      System.out.println(groupItem);
        return groupItem;
    }
   
   //공동구매상품 찜순으로 보기
   @GetMapping("/groupItem/like")
   public List<GroupItem> likeRanking(){
      List<GroupItem> groupItem = groupItemService.likeRanking();
      System.out.println(groupItem);
      return groupItem;
   }
   
   //공동구매상품 마감일순으로 보기
   @GetMapping("/groupItem/closedate")
   public List<GroupItem> closeRanking(){
      List<GroupItem> groupItem = groupItemService.closeRanking ();
      System.out.println(groupItem);
      return groupItem;
   }
   

   //공동구매상품 마감일순으로 보기
   @GetMapping("/groupItem/new")
   public List<GroupItem> newProduct(){
      List<GroupItem> groupItem = groupItemService.newProduct();
      System.out.println(groupItem);
      return groupItem;
   }
   
   //1인 주문하기
    @ResponseBody
    @RequestMapping(value="/groupItem/order", method=RequestMethod.POST) 
      public Order initNewOrder(HttpServletRequest request,
            @RequestBody Map<String, Object> paramMap
            )  {
       String[] orderInfo = new String[4];
       int i = 0;
       for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
          orderInfo[i] = pair.getValue().toString();
          System.out.println(orderInfo[i]);
            i++;
         }
       Order order = new Order();
       order.setUser_id(orderInfo[3]); 
       order.setTotalitem_price(Integer.parseInt(orderInfo[0]));
       order.setTotalitem_count(Integer.parseInt(orderInfo[1]));
       order.setGroupitem_id(Integer.parseInt(orderInfo[2]));
       order.setShip_status("s");
       Date day = new Date();
        order.setOrder_date(day);
       orderService.insertOrder(order);
       return order;
      }
   
   //공동구매 주문하기
       @ResponseBody
       @RequestMapping(value="/groupItem/attendorder", method=RequestMethod.POST) 
         public Order initNewAttendOrder(HttpServletRequest request,
               @RequestBody Map<String, Object> paramMap
               )  {
          String[] orderInfo = new String[5];
          int i = 0;
          for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
             orderInfo[i] = pair.getValue().toString();
             System.out.println(orderInfo[i]);
               i++;
            }
          Order order = new Order();
          order.setUser_id(orderInfo[3]); 
          order.setTotalitem_price(Double.parseDouble(orderInfo[0]));
          order.setTotalitem_count(Integer.parseInt(orderInfo[1]));
          order.setGroupitem_id(Integer.parseInt(orderInfo[2]));
          order.setShip_status("s");
          order.setAttend_id(Integer.parseInt(orderInfo[4]));
          Date day = new Date();
           order.setOrder_date(day);
          orderService.insertOrder(order);
          attendGroupItemService.updateTotalCount(Integer.parseInt(orderInfo[4]));
          return order;
         }
       
       //공동구매내역
       @GetMapping(value="/groupItem/grouporder/{user_id}")
         public List<MyGroupItems> getGroupOrder(@PathVariable("user_id") String user_id)  {
    	   	
    	    List<Order> orders =  orderService.getOrdersByUserId(user_id);
    	   	List<MyGroupItems> myGroupItems = new ArrayList<MyGroupItems>();
    	   	
    	   	for(int i = 0; i < orders.size(); i++) {
    	   		System.out.println(i);
    	   		if(orders.get(i).getAttend_id() > 0) {
    	   			MyGroupItems my1 = new MyGroupItems();
    	   			//order
    	   			my1.setGroupitem_id(orders.get(i).getGroupitem_id());
    	   			my1.setUser_id(orders.get(i).getUser_id());
    	   			System.out.println(orders.get(i).getUser_id());
    	   			//groupitem
    	   			my1.setImg(groupItemService.getGroupItem(orders.get(i).getGroupitem_id()).getImg());
    	   			//attendgroupitem
    	   			AttendGroupItem attend = attendGroupItemService.getGroupItem(orders.get(i).getAttend_id());
    	   			my1.setAttend_group_id(orders.get(i).getAttend_id());
    	   			my1.setUser_name(attend.getUser_name());
    	   			my1.setGroupitem_name(groupItemService.getGroupItem(orders.get(i).getGroupitem_id()).getGroupItem_name());
    	   			my1.setTotalGroupItem_count(attend.getTotalGroupItem_count());
    	   			my1.setMessage(attend.getMessage());
    	   			myGroupItems.add(my1);
    	   		}
    	   	}
    	   	return myGroupItems;
         }
   
   //카트->주문하기
       @ResponseBody
       @RequestMapping(value="/cart/order", method=RequestMethod.POST) 
         public Order initCartItemOrder(HttpServletRequest request,
               @RequestBody Map<String, Object> paramMap
               )  {
          String[] orderInfo = new String[5];
          int i = 0;
          for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
             orderInfo[i] = pair.getValue().toString();
             System.out.println(orderInfo[i]);
               i++;
            }
          Order order = new Order();
          order.setUser_id(orderInfo[3]); 
          order.setTotalitem_price(Integer.parseInt(orderInfo[0]));
          order.setTotalitem_count(Integer.parseInt(orderInfo[1]));
          order.setGroupitem_id(Integer.parseInt(orderInfo[2]));
          order.setOrder_count(Integer.parseInt(orderInfo[4]));
          order.setShip_status("s");
          Date day = new Date();
           order.setOrder_date(day);
          orderService.insertCartOrder(order);
          
          return order;
         }
   

      
      //주문 내역
       @GetMapping("/orders/{id}")
        public List<Order> orderList(@PathVariable("id") String id){
            return orderService.getOrdersByUserId(id);
        }
      
   
   
}