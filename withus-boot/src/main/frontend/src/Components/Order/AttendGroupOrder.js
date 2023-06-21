import '../../Css/AttendGroupOrder.css';
import styles from '../../Css/GroupItemDetail.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function AttendGroupOrder(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

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

    function orderBtn_click(orderPrice, count) {
        /*백엔드로 값 전달*/
        if(
            checkName === "" && checkEmail === "" && checkPhone === "" ){
            axios(
                {
                url: '/groupItem/attendorder',
                method: 'post',
                data: {
                 data1: orderPrice, data2:count, data3:props.item, data4:userId, data5:props.attendId
                } , 
                //baseURL: 'http://localhost:8080',
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

    //수량-----------------------------------------------------------------------
    const [groupBuycount, setgroupBuyCount] = useState(1);
    const handleQuantity = (type) => {
        if(type === "plus"){
        setgroupBuyCount(groupBuycount+1)
        }else{
        if(groupBuycount === 1) return;
        setgroupBuyCount(groupBuycount - 1);
        }
    }
    //가격 형식--------------------------------------------------------------------
    const convertPrice = (price) =>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    //상품 정보 가져오기--------------------------------------------------------------------
    const [groupItem, setGroupItem] = useState("");
    let { id } = useParams();

    useEffect(()=>{
        axios.get("/groupItem/detail/"+id).then((response)=>{
            if(response.data){
                console.log(response.data);
                setGroupItem(response.data);
            }else{
                alert("failed to");
            }
        });
    }, []);

    return (
    <div>
        <h1 id="attend-group-order_header">공동기부 참여하기</h1>
        <div id="attend-group-order_line"></div>
        <form id="attend-group-order_form">
            <div class="attend-group-order_content">
                <div class="attend-group-order_content1">
                    <div class="attend-group-order_name">이름</div>
                </div>
                <div class="attend-group-order_content2">
                    <div class="attend-group-order_inputBox">
                        <input class="attend-group-order_input" placeholder="이름을 입력해주세요"
                        onChange={updateName}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck_groupOrder">{checkName}</div>
            <div class="attend-group-order_content">
                <div class="attend-group-order_content1">
                    <div class="attend-group-order_name">이메일</div>
                </div>
                <div class="attend-group-order_content2">
                    <div class="attend-group-order_inputBox">
                        <input class="attend-group-order_input" placeholder="이메일을 입력해주세요"
                        onChange={updateEmail}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck_groupOrder">{checkEmail}</div>
            <div class="attend-group-order_content">
                <div class="attend-group-order_content1">
                    <div class="attend-group-order_name">전화번호</div>
                </div>
                <div class="attend-group-order_content2">
                    <div class="attend-group-order_inputBox">
                        <input class="attend-group-order_input" placeholder="숫자만 입력해주세요"
                        onChange={updatePhone}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck_groupOrder">{checkPhone}</div>    
            <div class="attned-group-order_content">
                <div className="group-buy-count-box">
                    <img
                    className="minus"
                    src="/icon-minus-line.svg"
                    alt="minus"
                    onClick={() => handleQuantity("minus")}
                    />
    
                    <div className="count">
                    <span>{groupBuycount}</span>
                    </div>
    
                    <img
                    className="plus"
                    src="/icon-plus-line.svg"
                    alt="plus"
                    onClick={() => handleQuantity("plus")}
                    />
                </div>
            </div>          
            <div className="attned-group-order_content3">  
                  <div className="attend-group-order-count-content">총 수량</div> 
                  <div className="attend-group-order-count">{groupBuycount}개</div>
                  <div className="attend-group-order-price-content">상품 총 금액</div> 
                  <div className="attend-group-order-price">{convertPrice(groupItem.groupItem_price*groupItem.groupItem_rate/100*groupBuycount)}</div>
                  <div className="attend-group-order-price-content2">원</div>
            </div>  
            <div id="attend-group-order_bottom">
                <button id="attend-group-order_btn" type="submit" 
                onClick={() => orderBtn_click(groupItem.groupItem_price*groupItem.groupItem_rate/100*groupBuycount, groupBuycount)}
                >결제하기</button>
            </div>
        </form>
    </div>
    );
}
  
export default AttendGroupOrder;