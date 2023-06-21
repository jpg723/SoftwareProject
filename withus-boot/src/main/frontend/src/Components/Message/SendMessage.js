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
        <div>
        <div>
          <span>수신자 {receiverId}</span>
        </div>
       
        <br />
        <div>
          <span>제목</span>
          <input
            type="text"
            onChange={saveTitle}
          />
        </div>
        <br />
        <div>
          <span>내용</span>
          <textarea
            name="contents"
            cols="100"
            rows="100" 
            onChange={saveContent}
          ></textarea>
        </div>
        <br />
        <div>
          <button  onClick={() => save()} >저장</button>
         
        </div>
      </div>
    );

    }

export default SendMessage;