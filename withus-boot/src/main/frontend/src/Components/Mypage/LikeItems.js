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
    <div><h3>나눔</h3>
    <div id="Item_view_main1">
      {
        list.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/item/detail/'+list[i].item_id} className="/groupItem">              
                  <img src={list[i].img} style={{width:"200px", height:"300px", border:"1px solid"}}/>
                </Link>             
                <div className={styles.product_price}>
                <div className={styles.product_name}>{list[i].item_name}</div>
                </div>
                <div className={styles.product_price}>
                  <div className={styles.origin_price}>{list[i].like_count}</div>
                </div>
              </div>              
            )           
        })
      }
    </div></div>
  );
}

export default LikeItems;