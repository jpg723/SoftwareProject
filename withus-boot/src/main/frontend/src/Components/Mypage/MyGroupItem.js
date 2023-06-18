import '../../Css/Mypage.css';
import React from 'react';
import MypageCategory from './MypageCategory.js';

function MyGroupItem() {
  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">공동구매 참여내역</div>
          <div id="mypage_line"></div>
        </div>
    </div>
  );
}
export default MyGroupItem;