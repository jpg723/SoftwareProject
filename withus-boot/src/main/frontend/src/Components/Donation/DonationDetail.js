import {useParams, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styles from '../../Css/DonationDetail.module.css';
import Modal from '../Modal/Modals.js';
import '../../Css/Donation.css';
import axios from 'axios';
import DonationComments from "./DonationComments";

 function DonationDetail(props) {

    let { id } = useParams();

    const [donation, setDonation] = useState("");

    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [donation_price, setPrice] = useState("");
    const [comments, setComments] = useState("");
    const [commentList , SetcommentList] = useState([]);

    const insertPrice = e => {
        setPrice(e.target.value);
    }
    const insertComments = e => {
        setComments(e.target.value);
    }
    const openModal1 = () => {
        setModalOpen1(true);
    };

    const closeModal1 = () => {
        setModalOpen1(false);
    };

    const openModal2 = () => {
        setModalOpen2(true);
      };
    
     const closeModal2 = () => {
       setModalOpen2(false);
     };

    function donationOrder () {
        /*백엔드로 값 전달*/
            if(sessionStorage.getItem("id") === null) {
                alert("로그인 하세요");
                setModalOpen2(false);
            }
            else {
            axios(
                {
                url: '/donation/order',
                method: 'post',
                data: {
                 data1: donation_price, 
                 data2: donation.donation_closeState, 
                 data3: id,
                 data4: sessionStorage.getItem("id"),
                 data5: comments,
                } , 
                //baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
                alert("신청되었습니다!");
            }); 
            setModalOpen2(false);
        }
    }

    useEffect(()=>{
        axios.get("/donationList/detail/"+id).then((res)=>{
            if(res.data){
                console.log(res);
                setDonation(res.data);
                console.log("기부 상세페이지");
            }else{
                alert("failed to");
            }
        });
    }, []);

    return (
        <div>
            <div className={styles.DonationDetailmain}>    
                <div className={styles.donation_img}>
                    <img className="groupItem_image" src={process.env.PUBLIC_URL + '/' + donation.img}></img>
                </div>
                <div className={styles.donationInfo}>
                    <div className={styles.donation_closeState}>{donation.donation_closeState === 0 ? <div>진행중</div> : <div>나눔 종료</div>}</div>
                    <div className={styles.donation_name}>{donation.donation_name}</div>        
                    <div className={styles.donation_content01}> 지금까지 기부액 </div>        
                    <div className={styles.donation_total_box}>  
                        <div className={styles.total_price}>{donation.totalDonationPrice}</div>
                        <div className={styles.total_unit}>원</div>
                    </div>  
                    <div className={styles.donation_detail}>{donation.donation_detail}</div>
                    <div className={styles.donation_btn_box}>
                        <button className={styles.btn_donation}  onClick={openModal2}>기부하기</button>
                    </div>
                </div>

                <Modal open={modalOpen2} close={closeModal2} header="기부하기">
                    <main className={styles.donation_order_modal}> {props.children}기부 정보</main>
                    <form id = "order_form">
                        <div class="order_content"> 
                            <div class="order_content1">
                                <div class="order_name"> &nbsp; 금액 </div>
                            </div>
                            <div class="order_content2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <div class="order_content2">
                                    <div class="order_inputBox">
                                        <input class="order_input" placeholder="금액을 입력해주세요" onChange={insertPrice}></input> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order_content">
                            <div class="order_content1">
                                <div class="order_name">메시지</div>
                            </div>
                            <div class="order_content2">
                                <div class="start_inputBox">
                                    <input class="order_input" placeholder="전하고 싶은 마음을 알려주세요" onChange={insertComments}></input>  
                                </div>
                            </div>
                        </div>
                        <div id="order_bottom">
                            <button id="order_btn" type="submit" onClick={() => donationOrder()}>확인</button>
                        </div> 
                    </form> 
                </Modal>     
            </div> 
            <div className={styles.comments_box}>
                <DonationComments/>
            </div>
        </div>        
    );
}
export default DonationDetail;