import '../../Css/Mypage.css';
import '../../Css/GroupItem.css';
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import styles from "../../Css/Product.module.css";

function LikeGroupItems() {

  const [list , SetList] = useState([]);
    
  const convertPrice = (price) =>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }

  useEffect(()=> {
    
    if(sessionStorage.getItem("id") === null) {
        return;
    }

    axios.get('/groupItems/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])       

  return (
    <div>
      <div class="mypage-groupItem-like-header">공동구호물품</div>
      <div class="like-groupItem_view_main">        
        {
          
          list.map(function(a,i){
              return(
                <div class="mypage-like-groupItem">  
                  <Link to={'/groupItem/detail/'+list[i].groupItem_id} class="like-groupItem-box">       
                    <img className="groupItem_image" style={{width:"250px", height:"300px"}} src={process.env.PUBLIC_URL+'/' + list[i].img}></img>
                    <div className={styles.product_name} style={{marginTop:"10px"}}>{list[i].groupItem_name}</div>
                    <div className={styles.product_price}>
                      <div className={styles.product_discount}>{list[i].groupItem_rate}%</div>
                      <div className={styles.price}>{convertPrice(list[i].groupItem_price*list[i].groupItem_rate/100)}</div>
                      <div className={styles.unit}>원</div>
                    </div>
                    <div className={styles.product_price}>
                      <div className={styles.origin_price}>{convertPrice(list[i].groupItem_price)}</div>
                      <div className={styles.origin_unit} style={{marginTop:"5px"}}>원</div>
                    </div>
                  </Link>
                </div>              
              )           
          })
        }
      </div>  
      <div class="mypage-like-line"></div> 
    </div>
  );
}
export default LikeGroupItems;