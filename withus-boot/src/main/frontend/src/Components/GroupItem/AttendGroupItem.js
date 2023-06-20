import React, { useState, useEffect } from "react";
import '../../Css/AttendGroupItem.css';
import '../../Css/Order.css';
import boxiconImg from '../../img/boxicon.avif';
import axios from 'axios';
import Modal from '../Modal/Modals.js';
import AttendGroupOrder from "../Order/AttendGroupOrder.js";

function AttendGroupItem(props) {

  const [attendgroupList , SetGroupList] = useState([]);

  const id = props.item;

  useEffect(()=> {
      axios.get('/attendgroupList/'+id).then((res)=>{
        SetGroupList(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))
    },[])

    const [groupBuymodalOpen, setgroupBuyModalOpen] = useState(false);

    const [selectedGroupId, setSelectedGroupId] = useState(-1);
    
    
    const opengroupBuyModal = (i) => {
      console.log(i);
      setgroupBuyModalOpen(true);
    };
    const closegroupBuyModal = () => {
      setgroupBuyModalOpen(false);
      setSelectedGroupId(-1);
    };

    const [modalOpen1, setModalOpen1] = useState(false);
    const openModal1 = () => {
      setModalOpen1(true);
    };
    const closeModal1 = () => {
      setModalOpen1(false);
    };

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");


    const insertMessage = e => {
          setMessage(e.target.value);      
        }

    const insertName = e => {
         setName(e.target.value);      
  }

 

    /*생성 버튼 클릭시*/
    function startBtn_click() {
      /*백엔드로 값 전달*/
      {
          axios(
              {
              url: '/insertGroup',
              method: 'post',
              data: {
               data1: sessionStorage.getItem("id"), data2:id, data3:name, data4:message
              } , 
              //baseURL: 'http://localhost:8080',
              //withCredentials: true,
              }
          ).then(function (response) {
              console.log(response.data);
          });

          alert("공동기부가 생성되었습니다!");
        }
  }
      

  let attends = [];
  function attend(props){
    let k = 0;
    attends[k] = props;
    k++;
  }

  return (
    <div>
      <div className="line2"></div>
      <div className="groupBuy-header">
        <div className="groupBuy-header-content1">4인 공동기부하기</div>
        <button className="groupStartBtn"  onClick={openModal1}>기부 시작</button>
        <Modal open={modalOpen1} close={closeModal1} header="공동기부 시작">
  
        <form id="order_form">
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">이름</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="이름을 입력해주세요" onChange={insertName}></input>
                    </div>
                </div>
            </div>
    
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">메시지</div>
                </div>
                <div class="order_content2">
                    <div class="start_inputBox">
                        <input class="start_input" placeholder="전하고 싶은 메시지를 입력해주세요!" onChange={insertMessage}></input>
                    </div>
                </div>
            </div>   
            <div id="order_bottom">
                <button id="order_btn" type="submit" 
                onClick={() => startBtn_click()}
                >생성</button>
            </div>
            </form>
                </Modal>
        <div className="groupBuy-header-content2">팀 전체보기</div>
      </div>
      <div className="groupBox">      
        {
          attendgroupList.map(function(a,i){
            return(              
                <div className="groupBox2">
                  <img class="boxicon" src={boxiconImg}></img>
                  <div className="groupitem-username">{a.user_name}</div>                 
                  <div className="groupitem-count">({a.totalGroupItem_count}/4)</div>
                  <div className="message">{a.message}</div>                                   
                  <div className="groupBuy-btnBox">  {a.totalGroupItem_count === 4 ? <div>주문종료</div>
                    : <button className="groupBuyBtn" onClick={()=>{
                      setSelectedGroupId(i); 
                      opengroupBuyModal();}}>주문참여</button>}</div>
                  {
                    groupBuymodalOpen===true && selectedGroupId ===i ?
                    <Modal open={groupBuymodalOpen} close={closegroupBuyModal} header="주문자 정보">
                    <AttendGroupOrder item={id} attendId={a.attend_group_id}/> 
                  </Modal> : null
          
                  }
                  
        
        
                </div>
              )          
          })
        }
      </div>
    </div>
  );
   
}


export default AttendGroupItem;