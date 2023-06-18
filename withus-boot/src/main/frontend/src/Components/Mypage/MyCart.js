import '../../Css/Mypage.css';
import React from 'react';
import MypageCategory from './MypageCategory.js';
import Cart from './Cart.js';

function MyCart() {
  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">장바구니</div>
          <div id="mypage_line"></div>
          <Cart/>
        </div>
    </div>
  );
}
export default MyCart;