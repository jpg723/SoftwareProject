import '../../Css/Mypage.css';
import '../../Css/Item.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MypageCategory from './MypageCategory.js';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modals.js';

function MyWritepage() {
  const [list , SetList] = useState([]);

  useEffect(()=> {
    axios.get('/item/list/'+sessionStorage.getItem("id")).then((res)=>{
    SetList(res.data)
    console.log(res)
    })
    .catch(error => console.log(error))
},[])   

//모달창


const [itemOpen, setItemModalOpen] = useState(false);
const [selectedItemId, setSelectedItemId] = useState(-1);
const openItemModal = (i) => {
  console.log(i);
  setItemModalOpen(true);
};
const closeItemModal = () => {
  setItemModalOpen(false);
  setSelectedItemId(-1);
};



const finishBtn_click = (id) => {
  /*나눔 종료*/
  if(id!==null){
  axios(
    {
    url: '/item/finish/'+id,
    method: 'get',
     
    //baseURL: 'http://localhost:8080',
    //withCredentials: true,
    }
).then(function (response) {
    console.log(response.data);
    document.location.href = "/item";
 
});}
else{
  alert("로그인을 먼저 해주세요!");
}

}



  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">내가 쓴 나눔글</div>
          <div id="mypage_line"></div>
          <div id="Item_view_main">
      {
        list.map(function(a,i){
            return(
              <div>           
                <img src={list[i].img} onClick={()=>{
                      setSelectedItemId(i); 
                      openItemModal();}} name="viewimg" id="previewimg" alt="" style={{width:"200px", height:"300px", border:"1px solid"}}/>
                {
                    itemOpen===true && selectedItemId ===i ? (
                    <Modal open={itemOpen} close={closeItemModal} header="나눔 종료">
                    <main class="cart_text">나눔을 종료하시겠습니까? </main>  
              <div id="order_bottom">
                <button id="order_btn" type="submit" onClick={()=>finishBtn_click(a.item_id)}>나눔 종료</button>
              </div>  
                  </Modal> ): null
          
                  }   
                <div className={styles.product_price}>
                <div className={styles.product_name}>{a.item_name}</div>
                </div>
                
                  <div className={styles.product_price}>{a.item_state === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
               
              </div>              
            )           
        })
      }
    </div>   
        </div>
    </div>
  );
}
export default MyWritepage;