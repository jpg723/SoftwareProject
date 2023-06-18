import '../../Css/Item.css';
import item_image from '../../img/item_image.jpg';
import React from 'react';

function ItemView() {
  return (
    <div id="item_view_main">
        <div class="item">
            <img class="item_image" src={item_image}></img>
            <div class="item_info">
                <div class="item_name">나눔 아이템 이름</div>
                <div class="item_likeCount">찜 개수 100</div>
                <div class="item_state">나눔 완료</div>
            </div>
        </div>
        <div class="item">
            <img class="item_image" src={item_image}></img>
            <div class="item_info">
                <div class="item_name">나눔 아이템 이름</div>
                <div class="item_likeCount">찜 개수 100</div>
                <div class="item_state">나눔 완료</div>
            </div>
        </div>
        <div class="item">
            <img class="item_image" src={item_image}></img>
            <div class="item_info">
                <div class="item_name">나눔 아이템 이름</div>
                <div class="item_likeCount">찜 개수 100</div>
                <div class="item_state">나눔 완료</div>
            </div>
        </div>
    </div>
  );
}

export default ItemView;