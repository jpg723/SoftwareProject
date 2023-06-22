import '../../Css/Item.css';
import ItemView from './ItemView.js';
import styles from "../../Css/Product.module.css";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ItemMain() {
    const [list , SetList] = useState([]);
   
    useEffect(()=> {
        axios.get('/item/list').then((res)=>{
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

        axios.get(`/item/list/${url}`).then((res)=>{
            SetList(res.data)
        console.log(res)
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <h1 id="Item_header">나눔하기</h1>
            <div id="Item_main">
                <div id="item_category">
                    <div id="item_cate">카테고리</div>                
                    <Link to={'/item/category/' + [1]}><div class="itemCate_content">| 식품</div></Link>
                    <Link to={'/item/category/' + [2]}><div class="itemCate_content">| 의류</div></Link>
                    <Link to={'/item/category/' + [3]}><div class="itemCate_content">| 침구류</div></Link>
                    <Link to={'/item/category/' + [4]}><div class="itemCate_content">| 생활용품</div></Link>
                    <Link to={'/item/category/' + [5]}><div class="itemCate_content">| 가전제품</div></Link>
                    <Link to={'/item/category/' + [7]}><div class="itemCate_content">| 미용</div></Link>
                </div>
                <div id="Item_view">
                    <div id="Item_view_header">
                        <Link to="/itemwrite" class="item_register"><button class="item_register_btn">나눔하기</button></Link>
                        <div id="Item_list">
                            <button class="groupItem_list_content" value="new" onClick={handleListData}>최신순</button>
                            <div class="groupItem_list_content">|</div>
                            <button class="groupItem_list_content" value="like" onClick={handleListData}>찜하기순</button>
                        </div>
                    </div>
                    <main className={styles.flex_wrap}>
                        <ItemView list={list}/>                
                    </main>
                </div>
            </div>
        </div>
    );
}

export default ItemMain;