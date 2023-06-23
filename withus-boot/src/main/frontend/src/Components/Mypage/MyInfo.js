import axios from 'axios';
import '../../Css/Mypage.css';
import '../../Css/register.css';
import MypageCategory from './MypageCategory.js';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function  MyInfo(){

    const[member,setMember] = useState("");

    useEffect(()=>{
        axios.get("/member/info/"+sessionStorage.getItem("id")).then((response)=>{
            if(response.data){
                console.log(response.data);
                setMember(response.data);
            }else{
                alert("로그인이 필요합니다!");
                document.location.href = "/login";
            }
        });
      }, []);

    const [pw, setPw] = useState();
    const [pw_check, setPw_check] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [gender, setGender] = useState();
    const [birth, setBirth] = useState();

    /*유효성 검사*/
    const[checkPw, setCheckPw] = useState();
    const[checkPw_check, setCheckPw_check] = useState();
    const [checkName, setCheckName] = useState();
    const [checkEmail, setCheckEmail] = useState();
    const [checkPhone, setCheckPhone] = useState();
    const [checkZip, setCheckZip] = useState();
    const [checkAddress1, setCheckAddress1] = useState();
    const [checkAddress2, setCheckAddress2] = useState();
    const [checkBirth, setCheckBirth] = useState();

    const updatePw = e => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/

        if(e.target.value === "") 
            setPw(member.password);
    
        else if(regExp.test(e.target.value) === false)
            setCheckPw_check("비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다");

        else {
            setCheckPw_check("");
            setPw(e.target.value);
        }
    }
    const updatePw_check = e => {
        if(e.target.value != pw)
            setPw(member.password);
        else{
            setCheckPw_check("");
            setPw_check(e.target.value);
        }
    }
    const updateName = e => {

        if(e.target.value === "") 
            setName(member.user_name);
        else{
            setCheckName("");
            setName(e.target.value);
        }
    }
    const updateEmail = e => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if(e.target.value === "")
            setEmail(member.email);
        
        else if(regExp.test(e.target.value) === false)
            setCheckEmail("이메일 양식을 확인해주세요");

        else{    
            setCheckEmail("");
            setEmail(e.target.value);
        }
    }
    const updatePhone = e => {
        var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/

        if(e.target.value === "")
            setPhone(member.phone);

        else if(regExp.test(e.target.value) === false)
            setCheckPhone("전화번호 양식은 숫자만 8자리 입력입니다.");

        else{
            setCheckPhone("");
            setPhone(e.target.value);
        }
    }
    const updateZip = e => {
        var regExp = /^(?:[0-9])(?:\d{4})$/
        
        if(e.target.value === "")
            setZip(member.zip);

        else if(regExp.test(e.target.value) === false)
            setCheckZip("우편번호 양식은 5자리 숫자입니다.");

        else{
            setCheckZip("");
            setZip(e.target.value);
        }
    }
    const updateAddress1 = e => {
        if(e.target.value === "")
            setAddress1(member.address1);

        else{
            setCheckAddress1("");
            setAddress1(e.target.value);
        }
    }
    const updateAddress2 = e => {
        if(e.target.value === "")
            setAddress2(member.address2);

        else{
            setCheckAddress2("");
            setAddress2(e.target.value);
        }
    }
    const updateGender = e => {
        if(e.target.value === "")
            setGender(member.gender);
        else
            setGender(e.target.value);
    }
    const updateBirth = e => {
        var regExp = /^([1-9][0-9][0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/

        if(e.target.value === "")
            setBirth(member.birth);
        
        else if(regExp.test(e.target.value) === false)
            setCheckBirth("생년월일 양식을 확인해주세요");
        else{
            setCheckBirth("");
            setBirth(e.target.value);
        }
    }

    /*수정하기 버튼 클릭시*/
    function updateBtn_click() {
        //이걸 뺴야 잘 돌아가...ㅠㅠㅠ
        // if(checkPw === "" && checkPw_check === "" &&
        // checkName === "" && checkEmail === "" && checkPhone === "" && checkZip === "" &&
        // checkAddress1 === "" && checkAddress2 === "" && checkBirth == ""){
            axios(
                {
                    url: '/member/update',
                    method: 'post',
                    data: {
                        data1: pw, data2: name, data3: email, data4:phone, data5:zip, data6:address1, data7:address2, data8:gender, data9:birth, data10: sessionStorage.getItem("id")
                    },
                    baseURL: 'http://localhost:8080',
    
                }
            ).then(function (response) {
                console.log(response.data);
            });
                alert("수정이 완료되었습니다!");
            // }
    
            // else {
            //     alert("개인정보수정 입력폼을 확인해주세요");
            // }
       }
    
    return (
    <div id="mypage_main">
        <MypageCategory/>
        <div id="mypage_view">
          <div id="mypage_header">개인정보수정</div>
          <div id="mypage_line"></div>
          <form id="register_form">
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">아이디</div>
                </div>
                <div class="register_content2">
                    <div>
                        <div class="register_input">{sessionStorage.getItem("id")}</div>
                    </div>
                </div>
            </div>
            <div class="inputCheck"></div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">비밀번호</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" type="password" placeholder="새로운 비밀번호를 입력해주세요"
                        onChange={updatePw}></input>
                    </div>
                </div>
            </div>   
            <div class="inputCheck">{checkPw}</div>         
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">비밀번호 확인</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" type="password" placeholder="비밀번호를 한번 더 입력해주세요"
                        onChange={updatePw_check}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkPw_check}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">이름</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" onChange={updateName} placeholder={member.user_name}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkName}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">이메일</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.email}
                        onChange={updateEmail}></input>
                    </div>
                </div>
                <div class="register_content3">
                    <button class="register_check_btn">중복확인</button>
                </div>
            </div>
            <div class="inputCheck">{checkEmail}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">전화번호</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.phone}
                        onChange={updatePhone}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkPhone}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">우편번호</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.zip}
                        onChange={updateZip}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkZip}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">상세주소1</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.address1}
                        onChange={updateAddress1}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkAddress1}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">상세주소2</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.address2}
                        onChange={updateAddress2}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkAddress2}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">성별</div>
                </div>
                <div class="register_content2">
                    <input type="radio" class="radio_btn" name="gender" value="1" onChange={updateGender}></input>남성
                    <input type="radio" class="radio_btn" name="gender" value="2" onChange={updateGender} checked></input>여성
                </div>
            </div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">생년월일</div>
                </div>
                <div class="register_content2">    
                    <div class="register_inputBox">
                        <input class="register_input" placeholder={member.birth}
                        onChange={updateBirth} ></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkBirth}</div>
            <div id="register_bottom">
                <button id="register_btn" type="submit" 
                onClick={() => updateBtn_click()}
                >수정하기</button>
            </div>
          </form>
        </div>
    </div>
  );

}

export default MyInfo;