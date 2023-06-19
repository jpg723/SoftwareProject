import '../../Css/GroupItem.css';
import GroupItemView from './GroupItemView.js';
import styles from "../../Css/Product.module.css";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function GroupItemMain() {
    const [list , SetList] = useState([]);

    useEffect(()=> {
        axios.get('/groupItem').then((res)=>{
          SetList(res.data)
          console.log(res)
        })
        .catch(error => console.log(error))
      },[])   
      
    
    const handleListData = (e) => {
        const value =e.target.value;
       
        let url;
        if(value === "new")
            url="new";
        if(value ==="like")
            url = "like"
        if(value === "closedate")
           url="closedate"

        axios.get(`/groupItem/${url}`).then((res)=>{
            SetList(res.data)
           console.log(res)
        })
        .catch(error => console.log(error))
    }

  return (
    <div>
        <h1 id="groupItem_header">구호물품 공동구매</h1>
        <div id="groupItem_main">
            <div id="groupItem_view">
                <div id="groupItem_view_header">
                    <div id="groupItem_list">
                        <button class="groupItem_list_content" value="new" onClick={handleListData}>최신순</button>
                        <div class="groupItem_list_content">|</div>
                        <button class="groupItem_list_content" value="like" onClick={handleListData}>찜하기순</button>
                        <div class="groupItem_list_content">|</div>
                        <button class="groupItem_list_content" value="closedate" onClick={handleListData}>마감일순</button>
                    </div>
                </div>
                <main className={styles.flex_wrap}>
                    <GroupItemView list={list}/>                
                </main>
            </div>
        </div>
    </div>
  );
}

export default GroupItemMain;