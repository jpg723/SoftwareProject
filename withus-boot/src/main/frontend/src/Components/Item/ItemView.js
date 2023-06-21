import '../../Css/Item.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemView({list}){
  const [item, setItem] = useState("");
    
  return (
    <div id="Item_view_main">
      {
        list.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/item/detail/'+list[i].item_id}>              
                  <img src={list[i].img} name="viewimg" id="previewimg"/>
                </Link>             
                <div class="item_name">{list[i].item_name}</div>
                <div className="item-state">{item.item_state === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
                <div className={styles.product_price}>
                </div>
              </div>              
            )           
        })
      }
    </div>   
  );
}

export default ItemView;