import {useParams } from "react-router-dom";
import '../../Css/ItemDetail.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import off_heart from '../../img/off_heart.png';
import on_heart from '../../img/on_heart.png';
import styles from '../../Css/GroupItemDetail.module.css';

 function ItemDetail(props) {

  let { id } = useParams();
  const [item, setItem] = useState("");
  const [likeList, setLikeList] = useState("");

  useEffect(()=>{
    axios.get("/item/detail/"+id).then((response)=>{
        if(response.data){
            console.log(response.data);
            setItem(response.data);
            check_like();
        }else{
            alert("failed to");
        }
    });
  }, []);

  function check_like() {  
    if(sessionStorage.getItem("id") !== null) {
      axios(
        {
        url: '/Item/getLike/' + id +  '/' + sessionStorage.getItem("id"),
        method: 'get',
        //baseURL: 'http://localhost:8080',
        withCredentials: true,
        }
      ).then(function (response) {
        console.log(response.data);
        setLikeList(response.data);

        if(response.data.length > 0) {
          setLikeState(true);
          console.log("좋아요 여부" + likeList);
        }
        else {
          setLikeState(false);
          console.log("좋아요 안함" + likeList);
        }

      });
    }
    else {
      setLikeState(false);
    }
  }

  const [likeState, setLikeState] = useState(false);
  console.log("초기상태" + likeState);
  function likeBtn_click() {
    /*좋아요가 안 눌러져 있을 경우 */
    if(likeState === false && sessionStorage.getItem("id") !== null){
      setLikeState(true);
      axios(
        {
        url: '/Item/' + id +  '/' + sessionStorage.getItem("id") + '/like',
        method: 'get',
        //baseURL: 'http://localhost:8080',
        withCredentials: true,
        }
      ).then(function (response) {
        console.log(response.data);
      });
    }
    else if(likeState === true && sessionStorage.getItem("id") !== null){
      setLikeState(false);
      axios(
        {
        url: '/Item/like/cancel/' + id +  '/' + sessionStorage.getItem("id"),
        method: 'get',
        //baseURL: 'http://localhost:8080',
        withCredentials: true,
        }
      ).then(function (response) {
        console.log(response.data);
      });
    }
    else{
      alert("로그인을 해주세요!");
    }
  }

  return(
    <div id= "item-main">
      <div id="item-info">
        <div id="item-image">
          <img src={item.img} style={{width:"300px", height:"400px", borderRadius:"10px"}}/>
        </div>
        <div className="col-md-6">
          <div id="item-content">
          <div className="item-state">{item.item_state === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="item-category">
            {item.itemCategory_id === 0 ? <div>식품</div> : null}
            {item.itemCategory_id === 1 ? <div>의류</div> : null}
            {item.itemCategory_id === 2 ? <div>침구류</div> : null}
            {item.itemCategory_id === 3 ? <div>생활용품</div> : null}
            {item.itemCategory_id === 4 ? <div>가전제품</div> : null}
            {item.itemCategory_id === 5 ? <div>미용</div> : null}
          </div>
            <div className="item-detail">{item.item_detail}</div>
            <div className="item-content1">
              <Link to="/message" state={{receiver:item.user_id}}>
                <div className="chat-btn-box">
                  <button className="chat-btn">쪽지보내기</button> 
                </div>
              </Link>
              <button className="btn_itemLike" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
            </div>
          </div>
        </div>
      </div> 
    </div>
    )
  }
export default ItemDetail;