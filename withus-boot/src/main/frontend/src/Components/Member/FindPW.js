import {useParams, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styles from '../../Css/DonationDetail.module.css';
import Modal from '../Modal/Modals.js';
import '../../Css/Donation.css';
import axios from 'axios';

function FindPW() {

    const [modalOpen1, setModalOpen1] = useState(true);
    const [email, setEmail] = useState("");
    const [id, setID] = useState("");

    function find () {
        /*백엔드로 값 전달*/
        if(email === "") {
            alert("이메일을 입력하세요");
            setModalOpen1(false);
            return;
        }
        else if (id === "") {
            alert("아이디를 입력하세요");
            setModalOpen1(false);
            return;
        }
        else {
            axios(
                {
                url: '/member/findPW',
                method: 'post',
                data: {
                 data1: email, 
                 data2: id, 
                } , 
                //baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
                if(response.data.length === 0) {
                    alert("해당 비밀번호가 없습니다");
                }
                else {
                    alert("비밀번호: " + response.data);
                }
            }); 
            setModalOpen1(false);
        }
        }
    


    const closeModal1 = () => {
        setModalOpen1(false);
    };

    const insertEmail = e => {
        setEmail(e.target.value);
    }
    const insertId = e => {
        setID(e.target.value);
    }

    return (
        <Modal open={modalOpen1} close={closeModal1} header="비밀번호 찾기">
                    <form id = "id_form">
                        <div class="order_content"> 
                            <div class="order_content1">
                                <div class="order_name"> &nbsp; 이메일 </div>
                            </div>
                            <div class="order_content2">&nbsp; &nbsp;  
                                <div class="order_content2">
                                    <div class="order_inputBox">
                                        <input class="order_input" placeholder="이메일을 입력해주세요" onChange={insertEmail}></input> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order_content">
                            <div class="order_content1">
                                <div class="order_name">아이디</div>
                            </div>
                            <div class="order_content2">
                                <div class="start_inputBox">
                                    <input class="order_input" placeholder="아이디를 입력해주세요" onChange={insertId}></input>  
                                </div>
                            </div>
                        </div>
                        <div id="order_bottom">
                            <button id="order_btn" type="submit" onClick={() => find()}>확인</button>
                        </div> 
                    </form> 
                </Modal>
    );
    
}
export default FindPW;