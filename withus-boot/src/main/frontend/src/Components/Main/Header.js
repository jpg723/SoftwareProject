import '../../Css/Main.css';
import {Link} from 'react-router-dom';
import React, { useState, useEffect, useCallback} from 'react';
import MainCategory from './MainCategory.js';

function Header() {
    const [isLogin, setIsLogin] = useState(false); //로그인 관리
   
    useEffect(() => {
      if (sessionStorage.getItem("name") === null) {
        // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
        console.log("isLogin ?? :: ", isLogin);
      } else {
        // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
        // 로그인 상태 변경
        setIsLogin(true);
        console.log("isLogin ?? :: ", isLogin);
      }
    });

    const onLogout = () => {
      alert("로그아웃");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("name");
      setIsLogin(false);
    }

  return (

    <div>
      <div id="header">
          <div id="header_top">
              <div class="headerTop_content" name={isLogin}>            
                  {/* 로그인이 되어있다면 */}
                  {isLogin ? (
                    <Link to={`/mypage-likeItem`} className="login"><button class="login_btn">
                        {sessionStorage.getItem("name")}님</button></Link>
                        ) : (
                        <Link to="/login" class="login"><button class="login_btn">Log In</button></Link>
                  )}
                  {isLogin ? (
                    <div class="register_member" onClick={onLogout}><button class="register_btn">Log Out</button></div>
                    ) : (
                    <Link to="/register" class="register_member"><button class="register_btn">Sign Up</button></Link>
                  )}
              </div>
          </div>

          <div id="header_wrap">
              <div class="header_content1">
                  <Link to="/" class="loco">95창고</Link>
              </div>
              <MainCategory/>
          </div>
          <div class="main_header_line"></div>
      </div>
    </div> 
  );
}

export default Header;