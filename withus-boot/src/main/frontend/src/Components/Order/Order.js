import React, {useState} from "react";
import '../../Css/Order.css'
import axios from 'axios';

function order(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [orderPrice,setPrice] = useState(props.price);
    const [id, setId] = useState(props.groupItem_id);
    const [count, setCount] = useState(props.groupItem_count);
    const userId = sessionStorage.getItem("id");

    /*유효성 검사*/
    const [checkName, setCheckName] = useState(" ");
    const [checkEmail, setCheckEmail] = useState(" ");
    const [checkPhone, setCheckPhone] = useState(" ");
  
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
    
    



    /*가입하기 버튼 클릭시*/
    function orderBtn_click() {
        /*백엔드로 값 전달*/
        if(
            checkName === "" && checkEmail === "" && checkPhone === ""  ){
            axios(
                {
                url: '/groupItem/order',
                method: 'post',
                data: {
                 data1: orderPrice, data2:count, data3:id, data4:userId
                } , 
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });

            alert("결제가 완료되었습니다!");
        }

        else{
            alert("주문 입력폼을 확인해주세요");
        }
    }

    return (
    <div>
        <h1 id="order_header">주문자 정보</h1>
        <div id="order_line"></div>
        <form id="order_form">
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">이름</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="이름을 입력해주세요"
                        onChange={updateName}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkName}</div>
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">이메일</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="이메일을 입력해주세요"
                        onChange={updateEmail}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkEmail}</div>
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">전화번호</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="숫자만 입력해주세요"
                        onChange={updatePhone}></input>
                    </div>
                </div>
            </div>
            <div class="order_content">
                <div className="order-count-content">총 수량</div> 
                <div className="order-count">{props.groupItem_count}개</div>
                <div className="order-price-content">상품 총 금액</div> 
                <div className="order-price">{props.price}</div>
                <div className="order-price-content2">원</div>
            </div>
            <div class="inputCheck">{checkPhone}</div>                     
            <div id="order_bottom">
                <button id="order_btn" type="submit" 
                onClick={() => orderBtn_click()}
                >결제하기</button>
            </div>
        </form>
    </div>
    );
}
  
export default order;