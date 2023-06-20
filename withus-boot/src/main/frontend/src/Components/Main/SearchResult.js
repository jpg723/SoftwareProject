import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../Css/Product.module.css";
import {Link} from 'react-router-dom';
import '../../Css/GroupItem.css';
import { useLocation } from "react-router-dom";

function SearchResult() {
    const location = useLocation();
    const search = location.state.searchs;
    console.log(search)

    const [itemList , SetItemList] = useState([]);
    const [groupList , SetGroupList] = useState([]);
    const [donationList , SetDonationList] = useState([]);

     
  const convertPrice = (price) =>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }

    useEffect(()=> {
      axios.get('/search/item/'+search).then((res)=>{
        SetItemList(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))
    },[])     

    useEffect(()=> {
      axios.get('/search/groupItem/'+search).then((res)=>{
        SetGroupList(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))
    },[])     

    useEffect(()=> {
      axios.get('/search/donation/'+search).then((res)=>{
        SetDonationList(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))
    },[])    

  return (   
    <div id="groupItem_view_main">
      <div style={{width:'100%'}}><h2 style={{color: '#ee5f41'}}>공동구매상품 검색결과</h2></div>
      {groupList.length ===0 
      ? (
        <div style={{width:'100%'}}>
      <img src='search.PNG'></img>
      <p>검색 결과가 없습니다.</p>
      </div>
      )
      :(groupList.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/groupItem/detail/'+groupList[i].groupItem_id} className="/groupItem">  
                  <div className={styles.product_image}>       
                  <img className="groupItem_image" src={process.env.PUBLIC_URL+'/' + groupList[i].img}></img>
                  </div>
                </Link>
                <div className={styles.product_name}>{groupList[i].groupItem_name}</div>
                <div className={styles.product_price}>
                  <div className={styles.product_discount}>{groupList[i].groupItem_rate}%</div>
                  <div className={styles.price}>{convertPrice(groupList[i].groupItem_price*groupList[i].groupItem_rate/100)}</div>
                  <div className={styles.unit}>원</div>
                </div>
                <div className={styles.product_price}>
                  <div className={styles.origin_price}>{convertPrice(groupList[i].groupItem_price)}</div>
                  <div className={styles.origin_unit}>원</div>
                </div>
              </div>              
            )           
        }))
      }
    
      <div style={{width:'100%'}}><h2 style={{color: '#ee5f41'}}>나눔 검색결과</h2></div>
      {
        itemList.length === 0
        ?(
          <div style={{width:'100%'}}>
      <img src='search.PNG'></img>
      <p>검색 결과가 없습니다.</p>
      </div>
        )
        :(itemList.map(function(a,i){
            return(
              <div className={styles.product}>  
                <Link to={'/item/detail/'+itemList[i].item_id} className="/groupItem">  
                  <div className={styles.product_image}>       
                  <img className="groupItem_image" src={itemList[i].img}></img>
                  </div>
                </Link>
                <div className={styles.product_name}>{itemList[i].item_name}</div>
              </div>              
            )           
        }))
      }

<div style={{width:'100%'}}><h2 style={{color: '#ee5f41'}}>기부 검색결과</h2></div>      
  {donationList.length ===0 
    ? (<div style={{width:'100%'}}>
      <img src='search.PNG'></img>
      <p>검색 결과가 없습니다.</p>
      </div>
    )
    : (donationList.map(function(a,i){
      return(
        <div className={styles.product}>  
          <Link to={'/donationList/detail/'+donationList[i].donation_id} className="/groupItem">  
            <div className={styles.product_image}>       
            <img className="groupItem_image" src={process.env.PUBLIC_URL+'/' + donationList[i].img}></img>
            </div>
          </Link>
          <div className={styles.product_name}>{donationList[i].groupItem_name}</div>
          <div className={styles.product_price}>
            <div className={styles.price}>{donationList[i].totalDonationPrice}</div>
            <div className={styles.unit}>원</div>
          </div>

        </div>              
      )           
  }))
  }
        
      
    </div>
  
  )
}

export default SearchResult;
