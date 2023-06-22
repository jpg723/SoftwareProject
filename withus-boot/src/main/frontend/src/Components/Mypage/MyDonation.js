import '../../Css/Mypage.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import MypageCategory from './MypageCategory.js';
import styles from "../../Css/Product.module.css";

function MyDonation() {

  const [list , SetList] = useState([]);

  useEffect(()=> {
    
    if(sessionStorage.getItem("id") === null) {
        return;
    }

    axios.get('/myDonation/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])    

  return (
    <div id="mypage_main" style={{width:"200px", height:"300px", float: "left", display: "flex"}}>
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">기부 내역</div>
          <div id="mypage_line"></div>
        
    
    <div id="Item_view_main" style={{width:"30%", height:"300px", float: "left", flexDirection:"row", flexWrap:"wrap", display: "row"}}>
    {
      list.map(function(a,i){
          return(
            <div className={styles.product1} style={{flexDirection:"row", flexWrap:"wrap"}}> 
              <div>
              <img className="donation_image" src={process.env.PUBLIC_URL + '/' + list[i].img}></img>
              </div>           
              <div>
              <div className={styles.product_name}>{list[i].donation_name}</div>
              </div>
              <div>
                <div className={styles.product_name}>금액 {list[i].donation_price}</div>
              </div>
              <div>
                <div className={styles.product_name}>남긴말 {list[i].comments}</div>
              </div>
            </div>              
          )           
      })
    }
  </div></div></div>
  );
}
export default MyDonation;