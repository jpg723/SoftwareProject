import '../../Css/login.css'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User_login() {
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const[checkUserId, setCheckUserId] = useState(" ");
    const[checkPw, setCheckPw] = useState(" ");

    const updateUserId = e => {

        if(e.target.value === "")
            setCheckUserId("아이디를 입력해주세요");

        else{
            setCheckUserId("");
            setUserId(e.target.value);
      }
    }
    const updatePw = e => {

        if(e.target.value === "")
            setCheckPw("비밀번호를 입력해주세요");

        else {
            setCheckPw("");
            setPw(e.target.value);
        }
    }
    const [message, setMessage] = useState("");
 
    useEffect(() => {
        fetch('/member/login')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])

    /*로그인 버튼 클릭시*/
    function loginBtn_click() {        
        /*백엔드로 값 전달*/
        if(checkUserId === "" && checkPw === ""){
            axios(
                {
                url: '/member/login.do',
                method: 'post',
                data: {
                    data1:userId,data2:pw
                } , 
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
                console.log(response.data.user_id);
                if (response.data.user_id === undefined) {
                  alert("입력하신 아이디 또는 비밀번호가 일치하지 않습니다");
                }
                else if(response.data.password === undefined){
                  alert("입력하신 아이디 또는 비밀번호가 일치하지 않습니다");
                }
                else{
                  alert(response.data.user_name+"님 환영합니다!");

                  sessionStorage.setItem("id", response.data.user_id); // sessionStorage에 id라는 key 값으로 저장
                  sessionStorage.setItem("name", response.data.user_name);
                  document.location.href = "/";
                }
                }
                );
           
        }

        else{
            alert("로그인 입력폼을 확인해주세요");
        }
    }

    return (
      <div>
        <h1 id="login_header">로그인</h1>
          <div id="login_line"></div>
          <form id="login_form">
            <div class="login_content">
              <div class="login_inputBox">
                <input class="login_input" placeholder="아이디를 입력해주세요" onChange={updateUserId}></input>
              </div>
            </div>
            <div class="inputLoginCheck">{checkUserId}</div>
            <div class="login_content">
              <div class="login_inputBox">
                <input class="login_input" type="password" placeholder="비밀번호를 입력해주세요" onChange={updatePw}></input>
              </div>
            </div>
            <div class="inputLoginCheck">{checkPw}</div>   
            <div class="login_content">
              <div id="find">
                <div class="find_content">아이디 찾기</div>
                <div class="find_content">|</div>
                <div class="find_content">비밀번호 찾기</div>
              </div>
            </div>
            <div class="login_content">
              <button id="login_button" type="submit" 
                onClick={() => loginBtn_click()}>로그인</button>
            </div>
            <div class="login_content">
              <Link to="/register"><button id="register_button">가입하기</button></Link>
            </div>
          </form>
      </div>
    );
}

export default User_login;
