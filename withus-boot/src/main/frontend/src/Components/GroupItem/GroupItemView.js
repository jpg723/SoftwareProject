import '../../Css/GroupItem.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function GroupItemView(){
  const [list , SetList] = useState([]);
    
  const convertPrice = (price) =>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }
  useEffect(()=> {
    axios.get('/groupItem').then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])       

  return (
    <div id="groupItem_view_main">
      {
        list.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/groupItem/detail/'+list[i].groupItem_id} className="/groupItem">  
                  <div className={styles.product_image}>       
                  <img className="groupItem_image" src={process.env.PUBLIC_URL+'/' + list[i].img}></img>
                  </div>
                </Link>
                <div className={styles.product_name}>{list[i].groupItem_name}</div>
                <div className={styles.product_price}>
                  <div className={styles.product_discount}>{list[i].groupItem_rate}%</div>
                  <div className={styles.price}>{convertPrice(list[i].groupItem_price*list[i].groupItem_rate/100)}</div>
                  <div className={styles.unit}>원</div>
                </div>
                <div className={styles.product_price}>
                  <div className={styles.origin_price}>{convertPrice(list[i].groupItem_price)}</div>
                  <div className={styles.origin_unit}>원</div>
                </div>
              </div>              
            )           
        })
      }
    </div>   
  );
}

export default GroupItemView;