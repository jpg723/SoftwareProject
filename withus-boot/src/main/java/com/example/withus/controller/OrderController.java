package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

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
import com.example.withus.domain.GroupItem;
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
          Date day = new Date();
           order.setOrder_date(day);
          orderService.insertOrder(order);
          attendGroupItemService.updateTotalCount(Integer.parseInt(orderInfo[4]));
          return order;
         }
   
   //카트->주문하기
      

    @RequestMapping("/order/confirmOrder.do")
      protected ModelAndView confirmOrder(
            @ModelAttribute("orderForm") OrderForm orderForm, 
            SessionStatus status) {
          orderService.insertOrder(orderForm.getOrder());
         ModelAndView mav = new ModelAndView("ViewOrder");
         mav.addObject("order", orderForm.getOrder());
         mav.addObject("message", "주문해주셔서 감사합니다.");
         status.setComplete(); 
         return mav;
      }
   
    //주문 취소
      @PostMapping(value = "/orders/{order_id}/cancel")
       public String cancelOrder(@PathVariable("order_id") int order_id) {
           orderService.cancelOrder(order_id);
           return "redirect:/orders";
       }
      
      //주문 목록
       @GetMapping("/orders")
        public String orderList(@ModelAttribute("userSession") UserSession userSession, Model model){
            List<Order> orders = orderService.getOrdersByUserId(userSession.getAccount().getUser_id());
            model.addAttribute("orders", orders);
            return "order/orderList";
        }
      
   
   
}