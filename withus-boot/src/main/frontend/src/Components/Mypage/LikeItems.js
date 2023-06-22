import '../../Css/Item.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function LikeItems(props){

  const [list , SetList] = useState([]);

  useEffect(()=> {
    
    if(sessionStorage.getItem("id") === null) {
        return;
    }

    axios.get('/Items/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])    

  return (
    <div>
      <div class="mypage-groupItem-like-header">나눔</div>
      <div class="like-groupItem_view_main">
        {
          list.map(function(a,i){
              return(
                <div class="mypage-like-groupItem">  
                  <Link to={'/item/detail/'+list[i].item_id} class="like-groupItem-box">              
                    <img src={list[i].img} style={{width:"250px", height:"300px", borderRadius:"10px"}}/>        
                    <div className={styles.product_name} style={{marginTop:"10px"}}>{list[i].item_name}</div>
                    <div className={styles.product_price}>
                    <div className={styles.origin_price}>{list[i].like_count}</div>
                    </div>
                  </Link>     
                </div>       
                       
              )           
          })
        }
      </div>
    </div>
  );
}

export default LikeItems;