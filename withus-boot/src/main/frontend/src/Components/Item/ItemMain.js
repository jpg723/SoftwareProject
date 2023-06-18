import '../../Css/Item.css';
import ItemView from './ItemView.js';
import {Link} from 'react-router-dom';
import React from 'react';

function ItemMain() {
  return (
    <div>
        <h1 id="item_header">나눔</h1>
        <div id="item_main">
            <div id="item_category">
                <div id="item_cate">카테고리</div>
                <div class="itemCate_content">식품</div>
                <div class="itemCate_content">의류</div>
                <div class="itemCate_content">침구류</div>
                <div class="itemCate_content">생활용품</div>
                <div class="itemCate_content">가전제품</div>
                <div class="itemCate_content">미용</div>
            </div>
            <div id="item_view">
                <div id="item_view_header">
                    <Link to="/itemwrite" id="item_register">나눔하기</Link>
                    <div id="item_list">
                        <div class="item_list_content">신상품순</div>
                        <div class="item_list_content">|</div>
                        <div class="item_list_content">찜개수 순</div>
                        <div class="item_list_content">|</div>
                        <div class="item_list_content">나눔 전</div>
                    </div>
                </div>
                <ItemView/>
                <ItemView/>
            </div>
        </div>
    </div>
  );
}

export default ItemMain;