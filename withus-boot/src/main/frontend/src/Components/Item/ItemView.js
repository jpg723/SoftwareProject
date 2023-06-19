import '../../Css/Item.css';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemView(){
  const [list , SetList] = useState([]);
   
  useEffect(()=> {
    axios.get('/item/list').then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])       

  return (
    <div id="Item_view_main">
      {
        list.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/item/detail/'+list[i].item_id} className="/groupItem">              
                  <img src={list[i].img} name="viewimg" id="previewimg" alt="" style={{width:"200px", height:"300px", border:"1px solid"}}/>
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
    </div>   
  );
}

export default ItemView;