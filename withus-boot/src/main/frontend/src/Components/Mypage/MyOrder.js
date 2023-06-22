import '../../Css/Mypage.css';
import styles from "../../Css/Cart.module.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import MypageCategory from './MypageCategory.js';

function MyItem() {
  const [list , SetList] = useState([]);

  useEffect(()=> {
    axios.get('/orders/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])   

  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">주문 내역</div>
          <div id="mypage_line"></div>
          <img style={{width:700}}src={process.env.PUBLIC_URL+'/shipping.jpg' }/>
    <div>
{list.length ===0 ? (
  <div className={"style.not"}>
    <h2>주문 내역이 없습니다.</h2>
    <p>원하는 구호물품을 지금 바로 주문해보세요!</p>
  </div>
) :
(
  list.map(function(a,i){
    return(
           (a.order_count) >=2
          ? (
            <section className={styles.cart_product_list}>
            <div className={styles.cart_product_wrap}>
              <div className={styles.cart_product_image}>
               <p style={{marginTop:50, marginLeft:90, color:'red'}}>결제완료</p>
               <p style={{marginLeft:90}}>묶음 주문</p>
              </div>
              
            
              <div className={styles.cart_product_info}>
                <p className={styles.product_name}>{a.totalitem_price}원</p>
                <p className={styles.price}>배송중</p>
                <p className={styles.delivery}>택배배송 / 무료배송</p>
                </div>
            </div>
    
            <div className={styles.cart_product_count}>
              <div className={styles.count}>
                <span>{a.totalitem_count}</span>
              </div>
            </div>
    
            <img src={process.env.PUBLIC_URL+'/car.PNG' }/>
       
          </section>
          )
        
        : (<section className={styles.cart_product_list}>
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
           <p style={{marginTop:50, marginLeft:90, color:'red'}}>결제완료</p>
          </div>
          
        
          <div className={styles.cart_product_info}>
            <p className={styles.product_name}>{a.totalitem_price}원</p>
            <p className={styles.price}>배송중</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
            </div>
        </div>

        <div className={styles.cart_product_count}>
          <div className={styles.count}>
            <span>{a.totalitem_count}</span>
          </div>
        </div>
 
          <img src={process.env.PUBLIC_URL+'/car.PNG' }/>
       
      </section>
        )
      
      
      )}
  )
    
)
    }
    </div>
  </div>
  </div>
  );


}
export default MyItem;