import '../../Css/Mypage.css';
import React from 'react';
import {Link} from 'react-router-dom';


function Mypage() {
  return (
    <div>
        <div id="mypage_category">
            <div id="mypage_cate">마이페이지</div>
            <Link to="/mypage-likeItem" class="mypageCate_content"><div class="mypageCate_content">찜한 상품</div></Link>
            <Link to="/mypage-mywrite" class="mypageCate_content"><div class="mypageCate_content">내가 쓴 나눔글</div></Link>
            <Link to="/mypage-mydonation" class="mypageCate_content"><div class="mypageCate_content">기부 내역</div></Link>
            <Link to="/mypage-mycart" class="mypageCate_content"><div class="mypageCate_content">장바구니</div></Link>
            <Link to="/mypage-myitem" class="mypageCate_content"><div class="mypageCate_content">나눔 내역</div></Link>
            <Link to="/mypage-mygroupitem" class="mypageCate_content"><div class="mypageCate_content">공동구매 참여 내역</div></Link>
            <Link to="/mypage-myinfo" class="mypageCate_content"><div class="mypageCate_content">개인정보수정</div></Link>
        </div>
    </div>
  );
}

export default Mypage;