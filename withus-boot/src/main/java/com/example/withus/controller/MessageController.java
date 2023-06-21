package com.example.withus.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.withus.domain.Message;

import com.example.withus.service.MessageService;


@RestController
public class MessageController {
   @Autowired
   private MessageService messageService;

   
   //메시지 전송
   @ResponseBody
   @RequestMapping(value="/message/send", method=RequestMethod.POST) 
     public Message insertMessage(HttpServletRequest request,
           @RequestBody Map<String, Object> paramMap
           )  {
      String[] messageInfo = new String[4];
      int i = 0;
      for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
         messageInfo[i] = pair.getValue().toString();
         System.out.println(messageInfo[i]);
           i++;
        }
      Message message= new Message();
      message.setSender_id(messageInfo[0]);
      message.setReceiver_id(messageInfo[1]);
      message.setTitle(messageInfo[2]);
      message.setContent(messageInfo[3]);
      Date day = new Date();
      message.setRead_chk(0);
      
      messageService.insertMessage(message);
      System.out.println(message);
        return message;
     }
  
  //받은 메시지 목록
   @GetMapping(value = "/message/{receiver_id}")
   public List<Message> carts(@PathVariable("receiver_id") String receiver_id) {
      
       return messageService.getMessageList(receiver_id);
   }
   
}