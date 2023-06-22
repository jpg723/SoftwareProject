import React, { useState, useEffect } from "react";
import '../../Css/AttendGroupItem.css';
import '../../Css/SendMessage.css';
import boxiconImg from '../../img/boxicon.avif';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Css/Message.css';

function Messages() {

    const [messageList , SetMessageList] = useState([]);

    useEffect(()=> {
        axios.get('/message/'+sessionStorage.getItem("id")).then((res)=>{
            SetMessageList(res.data)
          console.log(res)
        })
        .catch(error => console.log(error))
      },[])

      console.log(messageList);

      return (
        <div>
          <div class="receive-message-box">받은 쪽지함</div>
          <div className="groupBox">      
            {
              messageList.map(function(a,i){
                return(     
                  <div>
                    {
                      a.read_chk === 0 ? (<Link to={'/message/detail/'+a.message_id} className="message-content">       
                      <div class="message-sender-name-new">{a.sender_id}</div> 
                      <div class="message-content-line">|</div>             
                      <div class="message-send-content-new">{a.title}</div>  
                      <button class="message-detail-btn">보기</button>                                  
                  </Link>)
                  : (<Link to={'/message/detail/'+a.message_id} className="message-content">       
                  <div class="message-sender-name">{a.sender_id}</div> 
                  <div class="message-content-line">|</div>             
                  <div class="message-send-content">{a.title}</div>  
                  <button class="message-detail-btn">보기</button>                                  
                  
              </Link>)

                    }
                   
                    <div class="messsage-one-line"></div>   
                  </div>              
                )
              })   
            }        
          </div>
    </div>
    
  );
}

export default Messages;