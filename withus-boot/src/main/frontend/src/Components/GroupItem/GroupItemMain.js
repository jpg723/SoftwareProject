import '../../Css/GroupItem.css';
import GroupItemView from './GroupItemView.js';
import styles from "../../Css/Product.module.css";
import React from 'react';

function GroupItemMain() {
  return (
    <div>
        <h1 id="groupItem_header">구호물품 공동구매</h1>
        <div id="groupItem_main">
            <div id="groupItem_view">
                <div id="groupItem_view_header">
                    <div id="groupItem_list">
                        <div class="groupItem_list_content">신상품순</div>
                        <div class="groupItem_list_content">|</div>
                        <div class="groupItem_list_content">찜개수 순</div>
                        <div class="groupItem_list_content">|</div>
                        <div class="groupItem_list_content">마감전순</div>
                    </div>
                </div>
                <main className={styles.flex_wrap}>
                    <GroupItemView/>                
                </main>
            </div>
        </div>
    </div>
  );
}

export default GroupItemMain;