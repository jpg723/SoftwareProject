import {useParams } from "react-router-dom";
import styles from '../../Css/GroupItemDetail.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


 function ItemDetail(props) {

  let { id } = useParams();
  const [item, setItem] = useState("");

  useEffect(()=>{
    axios.get("/item/detail/"+id).then((response)=>{
        if(response.data){
            console.log(response.data);
            setItem(response.data);
        }else{
            alert("failed to");
        }
    });
}, []);
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={item.img} style={{width:"500px", height:"700px", border:"1px solid"}}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.item_name}</h4>
          <p>{item.item_state}</p>
          <p>{item.item_detail}</p>
          <div className={styles.btn} >
          <button  className={styles.btn_buy}>채팅하기</button> 
          </div>
        </div>
      </div>
    </div> 
    )
    }
    export default ItemDetail;