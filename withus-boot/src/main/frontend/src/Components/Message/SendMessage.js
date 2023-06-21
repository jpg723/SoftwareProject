import '../../Css/SendMessage.css';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const SendMessage = () => {
	const location = useLocation();
    const senderId = sessionStorage.getItem("id");
    const receiverId = location.state.receiver;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const saveTitle = e => {
      setTitle(e.target.value);
      console.log(title);
    }

    const saveContent = e => {
      setContent(e.target.value);
    }


    function save() {
      /*백엔드로 값 전달*/
      if(title===" " || content===" "){
          alert("제목 또는 내용을 입력해주세요!");
      }
      else if(senderId === receiverId){
          alert("본인에게는 메시지를 보낼 수 없습니다!");
      }
      else
      {
        axios(
            {
            url: '/message/send',
            method: 'post',
            data: {
              data1: senderId, data2:receiverId, data3:title, data4:content
            } , 
            //baseURL: 'http://localhost:8080',
            //withCredentials: true,
            }
        ).then(function (response) {
            console.log(response.data);
        });

        alert("메시지가 판매자에게 전송됐습니다!");
        document.location.href = "/item";
      }
    }
    
    return (
      <div id="SendMessageForm">
        <div class="sendForm_header">쪽지보내기</div>
        <div class="receiver_id_box">
          <div>보내는 사람 | {receiverId}</div>
        </div>       
        <div>
          <div class="send-message-title-inputBox">
            <div class="send-message-title">제목</div>
            <input type="text" class="send-message-title-input" onChange={saveTitle} placeholder="제목을 입력해주세요" /></div>
        </div>
        <div class="send-message-content-inputBox">
          <div class="send-message-content">내용</div>
          <div class="send-message-content-input">
            <textarea
              name="contents" class="send-message-content-input"
              cols="49"
              rows="10" 
              onChange={saveContent} placeholder="내용을 입력해주세요" >
            </textarea>
          </div>
        </div>
        <button onClick={() => save()} class="message-sned-btn">전송</button>         
      </div>
    );

    }

export default SendMessage;