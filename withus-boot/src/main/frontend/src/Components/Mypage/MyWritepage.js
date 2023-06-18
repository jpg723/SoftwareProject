import '../../Css/Mypage.css';
import React from 'react';
import MypageCategory from './MypageCategory.js';

function MyWritepage() {
  return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">내가 쓴 나눔글</div>
          <div id="mypage_line"></div>
        </div>
    </div>
  );
}
export default MyWritepage;