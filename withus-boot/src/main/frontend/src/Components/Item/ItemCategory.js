import '../../Css/Item.css';
import ItemMain from './ItemView.js';
import styles from "../../Css/Product.module.css";
import React, { useState, useEffect} from 'react';
import axios from 'axios'; 
import { Link, useParams } from 'react-router-dom';

function itemCategory(props){
   
    let {itemcategory_id} = useParams();
    const [list , SetList] = useState([]);
    
    useEffect(()=> {

        axios.get('/item/category/'+ itemcategory_id ).then((res)=>{
            SetList(res.data)
            console.log(itemcategory_id)
            console.log(res)
        })
        .catch(error => console.log(error))
      },[]);


  return (    
    <div>
        
    <div id="Item_view_main">
      {
        list.map(function(a,i){
            return(           
              <div className={styles.product}>
                <Link to={'/item/detail/'+list[i].item_id}>              
                  <img src={list[i].img} name="viewimg" id="previewimg"/>
                </Link>             
                <div class="item_name">{list[i].item_name}</div>
                <div class="item-view-line"></div>
                <div class="item-view-state">{list[i].item_state === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
              </div>                          
            )           
        })
      }
    </div></div>
  );
}

export default itemCategory;