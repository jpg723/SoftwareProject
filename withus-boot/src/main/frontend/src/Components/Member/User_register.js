import React, {useState} from "react";
import '../../Css/register.css'
import axios from 'axios';

function User_register() {
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [pw_check, setPw_check] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [zip, setZip] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [gender, setGender] = useState(0);
    const [birth, setBirth] = useState("");

    /*유효성 검사*/
    const[checkUserId, setCheckUserId] = useState(" ");
    const[checkPw, setCheckPw] = useState(" ");
    const[checkPw_check, setCheckPw_check] = useState(" ");
    const [checkName, setCheckName] = useState(" ");
    const [checkEmail, setCheckEmail] = useState(" ");
    const [checkPhone, setCheckPhone] = useState(" ");
    const [checkZip, setCheckZip] = useState(" ");
    const [checkAddress1, setCheckAddress1] = useState(" ");
    const [checkAddress2, setCheckAddress2] = useState(" ");
    const [checkBirth, setCheckBirth] = useState(" ");

    const updateUserId = e => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/

        if(e.target.value === "")
            setCheckUserId("아이디를 입력해주세요");
        
        else if(regExp.test(e.target.value) === false)
            setCheckUserId("아이디는 영문, 숫자 조합 6자리 이상이어야 합니다");

        else{
            setCheckUserId("");
            setUserId(e.target.value);
        }
    }
    const updatePw = e => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/

        if(e.target.value === "")
            setCheckPw("비밀번호를 입력해주세요");
    
        else if(regExp.test(e.target.value) === false)
            setCheckPw("비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다");

        else {
            setCheckPw("");
            setPw(e.target.value);
        }
    }
    const updatePw_check = e => {
        if(e.target.value != pw)
            setCheckPw_check("비밀번호를 확인해주세요");
        else{
            setCheckPw_check("");
            setPw_check(e.target.value);
        }
    }
    const updateName = e => {

        if(e.target.value === "")
            setCheckName("이름을 입력해주세요");
        else{
            setCheckName("");
            setName(e.target.value);
        }
    }
    const updateEmail = e => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if(e.target.value === "")
            setCheckEmail("이메일을 입력해주세요");
        
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
            setCheckPhone("전화번호를 입력해주세요");

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
            setCheckZip("우편번호를 입력해주세요");

        else if(regExp.test(e.target.value) === false)
            setCheckZip("우편번호 양식은 5자리 숫자입니다.");

        else{
            setCheckZip("");
            setZip(e.target.value);
        }
    }
    const updateAddress1 = e => {
        if(e.target.value === "")
            setCheckAddress1("도/시/읍.면.군을 입력하세요");

        else{
            setCheckAddress1("");
            setAddress1(e.target.value);
        }
    }
    const updateAddress2 = e => {
        if(e.target.value === "")
            setCheckAddress2("상세주소를 입력해주세요");

        else{
            setCheckAddress2("");
            setAddress2(e.target.value);
        }
    }
    const updateGender = e => setGender(e.target.value);
    const updateBirth = e => {
        var regExp = /^([1-9][0-9][0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/

        if(e.target.value === "")
            setCheckBirth("생년월일을 입력해주세요");
        
        else if(regExp.test(e.target.value) === false)
            setCheckBirth("생년월일 양식을 확인해주세요");
        else{
            setCheckBirth("");
            setBirth(e.target.value);
        }
    }

    /*가입하기 버튼 클릭시*/
    function registerBtn_click() {
        /*백엔드로 값 전달*/
        if(checkUserId === "" && checkPw === "" && checkPw_check === "" &&
            checkName === "" && checkEmail === "" && checkPhone === "" && checkZip === "" &&
            checkAddress1 === "" && checkAddress2 === "" && checkBirth == ""){
            axios(
                {
                url: '/member/register.do',
                method: 'post',
                data: {
                    data1:userId,data2:pw, data3: name, data4:email, data5:phone, data6:zip, data7:address1, data8:address2, data9:gender, data10:birth
                } , 
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });

            alert("회원가입이 완료되었습니다!");
        }

        else{
            alert("회원가입 입력폼을 확인해주세요");
        }
    }

    return (
    <div>
        <h1 id="register_header">회원가입</h1>
        <div id="register_line"></div>
        <form id="register_form">
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">아이디</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" placeholder="아이디를 입력하세요"
                        onChange={updateUserId}></input>
                    </div>
                </div>
                <div class="register_content3">
                    <button class="register_check_btn">중복확인</button>
                </div>
            </div>
            <div class="inputCheck">{checkUserId}</div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">비밀번호</div>
                </div>
                <div class="register_content2">
                    <div class="register_inputBox">
                        <input class="register_input" type="password" placeholder="비밀번호를 입력해주세요"
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
                        <input class="register_input" placeholder="이름을 입력해주세요"
                        onChange={updateName}></input>
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
                        <input class="register_input" placeholder="이메일을 입력해주세요"
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
                        <input class="register_input" placeholder="숫자만 입력해주세요"
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
                        <input class="register_input" placeholder="우편번호를 입력해주세요"
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
                        <input class="register_input" placeholder="도/시/군/구/동/읍/면/리"
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
                        <input class="register_input" placeholder="상세주소를 입력해주세요"
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
                    <input type="radio" class="radio_btn" name="gender" value="1" checked onChange={updateGender}></input>남성
                    <input type="radio" class="radio_btn" name="gender" value="2" onChange={updateGender}></input>여성
                </div>
            </div>
            <div class="register_content">
                <div class="register_content1">
                    <div class="register_name">생년월일</div>
                </div>
                <div class="register_content2">    
                    <div class="register_inputBox">
                        <input class="register_input" placeholder="YYYYMMDD"
                        onChange={updateBirth} onBlur={checkBirth}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkBirth}</div>
            <div id="register_bottom">
                <button id="register_btn" type="submit" 
                onClick={() => registerBtn_click()}
                >가입하기</button>
            </div>
        </form>
    </div>
    );
}
  
export default User_register;