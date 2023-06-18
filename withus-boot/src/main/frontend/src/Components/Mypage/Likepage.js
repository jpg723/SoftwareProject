import '../../Css/Mypage.css';
import React from 'react';
import MypageCategory from './MypageCategory.js';

function Likepage() {
  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">찜한 상품</div>
          <div id="mypage_line"></div>
        </div>
    </div>
  );
}
export default Likepage;