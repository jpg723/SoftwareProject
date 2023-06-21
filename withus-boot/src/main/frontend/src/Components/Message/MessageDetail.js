import {useParams } from "react-router-dom";
import '../../Css/SendMessage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


 function MessageDetail() {

  let { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(()=> {
    axios.get('/message/read/'+id).then((res)=>{
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])

  useEffect(()=> {
    axios.get('/message/detail/'+id).then((res)=>{
        setMessage(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])


  return (
    <div id="SendMessageForm">
      <div class="sendForm_header">받은 쪽지</div>
      <div class="receiver_id_box">
        <div>보내는 사람 | {message.sender_id}</div>
      </div>       
      <div>
        <div class="send-message-title-inputBox">
          <div class="send-message-title">제목 | {message.title}</div>
      </div>
      <div class="send-message-content-inputBox">
        <div class="send-message-content">내용 | {message.content}</div>   
      </div>
      </div>
      <button class="message-sned-btn">답장</button>         
    </div>
  );
}
export default MessageDetail;