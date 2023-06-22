import '../../Css/Item.css';
import styles from "../../Css/Product.module.css";
import React, { useState} from 'react';
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
                <div class="item-view-line"></div>
                <div class="item_category"> 
                  {list[i].itemCategory_id === 0 ? <div>식품</div> : null}
                  {list[i].itemCategory_id === 1 ? <div>의류</div> : null}
                  {list[i].itemCategory_id === 2 ? <div>침구류</div> : null}
                  {list[i].itemCategory_id === 3 ? <div>생활용품</div> : null}
                  {list[i].itemCategory_id === 4 ? <div>가전제품</div> : null}
                  {list[i].itemCategory_id === 5 ? <div>미용</div> : null}
                </div>
                <div class="item-view-state">{list[i].item_state === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
              </div>              
            )           
        })
      }
    </div>   
  );
}

export default ItemView;