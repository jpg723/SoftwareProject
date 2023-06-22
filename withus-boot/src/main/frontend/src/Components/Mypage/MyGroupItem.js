import '../../Css/Mypage.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import MypageCategory from './MypageCategory.js';
import axios from 'axios';

function MyGroupItem() {

  const [list , SetList] = useState([]);
    
  const convertPrice = (price) =>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }

  useEffect(()=> {
    
    if(sessionStorage.getItem("id") === null) {
        return;
    }

    axios.get('/groupItem/grouporder/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[]) 

  return (
    <div>
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">공동구매 참여내역</div>
          <div id="mypage_line"></div>
        </div>
    </div>
    <div class="like-groupItem_view_main" style={{marginLeft:"25%", marginTop:"-25%"}}>        
      {
        
        list.map(function(a,i){
            return(
              <div class="mypage-like-groupItem" style={{width:"250px", height:"300px", marginTop:"-5%"}}>  
                <Link to={'/groupItem/detail/'+list[i].groupitem_id} class="like-groupItem-box">       
                  <img className="groupItem_image" style={{width:"250px", height:"300px"}} src={process.env.PUBLIC_URL+'/' + list[i].img}></img>
                </Link>
                <div></div>
              <div className={styles.product_name} style={{marginTop:"10px", fontSize:"16px"}}>{list[i].groupitem_name}</div>
              
              <div>
                <div className={styles.product_name} style={{fontSize:"16px"}}>개설자 {list[i].user_name}</div>
              </div>
              <div>
                <div className={styles.product_name} style={{fontSize:"16px"}}>참여자 {list[i].user_id}</div>
              </div>
              <div>
                <div className={styles.product_name} style={{fontSize:"16px"}}>{list[i].message} </div>
              </div>
              </div>              
            )           
        })
      }
    </div>  
    <div class="mypage-like-line"></div> 
  </div>
  );
}
export default MyGroupItem;