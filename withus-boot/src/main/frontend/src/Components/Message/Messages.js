import React, { useState, useEffect } from "react";
import '../../Css/AttendGroupItem.css';
import '../../Css/Order.css';
import boxiconImg from '../../img/boxicon.avif';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
          <div className="line2"></div>
          <div className="message-header">
            <div className="groupBuy-header-content1">쪽지함</div>
          </div>
          <div className="groupBox">      
            {
              messageList.map(function(a,i){
                return(     
                    <Link to={'/message/detail/'+a.message_id}>          
                    <div className="groupBox2" >
                      <img class="boxicon" src={boxiconImg}></img>
                      <div className="groupitem-username">{a.sender_id}</div>                 
                      <div className="message">{a.title}</div>                                   
                      <div className="groupBuy-btnBox">  {a.read_chk === 1 ? <div>읽음</div>
                        :  <div>읽지않음</div>}</div>
                        </div>
                        </Link>
                    )
                    })   
                } 
          
        </div>
    </div>
    
  );
}

export default Messages;