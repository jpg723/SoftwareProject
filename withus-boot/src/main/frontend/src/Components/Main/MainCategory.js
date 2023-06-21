import { Link } from 'react-router-dom';
import '../../Css/Main.css';
import React from 'react';

function MainCategory() {
  return (
    <div>
        <div id="category">
            <div class="category_content2">
                <Link to="/item" class="category_content2_sub sub3">
                    <text>나눔</text>
                </Link>
                <Link to="/groupItem" class="category_content2_sub sub2">
                    <text>구호물품 공동구매</text>
                </Link>
                <Link to="/donation" class="category_content2_sub sub">
                    <text>기부</text>
                </Link>
                <Link to="/mypage-likeItem" class="category_content2_sub sub1">
                    <text>마이페이지</text>
                </Link>
            </div>   
        </div>
    </div>
  );
}

export default MainCategory;
