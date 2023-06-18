import '../../Css/Item.css';
import ItemView from './ItemView.js';
import styles from "../../Css/Product.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

function ItemMain() {
  return (
    <div>
        <h1 id="Item_header">나눔하기</h1>
        <div id="Item_main">
            <div id="item_category">
                <div id="item_cate">카테고리</div>
                <div class="itemCate_content">식품</div>
                <div class="itemCate_content">의류</div>
                <div class="itemCate_content">침구류</div>
                <div class="itemCate_content">생활용품</div>
                <div class="itemCate_content">가전제품</div>
                <div class="itemCate_content">미용</div>
            </div>
            <div id="Item_view">
                <div id="Item_view_header">
                    <Link to="/itemwrite" class="item_register"><div class="item_register">나눔하기</div></Link>
                    <div id="Item_list">
                        <div class="groupItem_list_content">신상품순</div>
                        <div class="groupItem_list_content">|</div>
                        <div class="groupItem_list_content">찜개수 순</div>
                        <div class="groupItem_list_content">|</div>
                        <div class="groupItem_list_content">마감전순</div>
                    </div>
                </div>
                <main className={styles.flex_wrap}>
                    <ItemView/>                
                </main>
            </div>
        </div>
    </div>
  );
}

export default ItemMain;