import {useParams, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styles from '../../Css/DonationDetail.module.css';
import Modal from '../Modal/Modals.js';
import '../../Css/Donation.css';
import axios from 'axios';

 function DonationDetail(props) {

    let { id } = useParams();

    const [donation, setDonation] = useState("");

    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

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
           axios(
                {
                url: '/donation/order',
                method: 'post',
                data: {
                 data1: donation.totalDonationPrice, 
                 data2: donation.donation_closeState, 
                 data3: id
                } , 
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });

            alert("신청되었습니다!");
            setModalOpen2(false);
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

    return(
        <div className={styles.DonationDetailmain}>
            <div className={styles.groupItemInfo}>
              <div className={styles.product_name}>{donation.donation_name}</div>
              
              <div className={styles.price}>
                {donation.totalDonationPrice}
                <span className={styles.unit}>원</span>
              </div>

              <div className={styles.line}></div>
              
              <div className={styles.sum}>  
                  <div className={styles.total}>상품 총 금액</div> 
                  <div className={styles.total_price}>{donation.totalDonationPrice}</div>
                  <div className={styles.total_unit}>원</div>
              </div>  
              <div className={styles.btn}>
              <button className={styles.btn_buy}  onClick={openModal2}>주문하기</button>
    
              <Modal open={modalOpen2} close={closeModal2} header="주문하기">
                  <main> {props.children} </main>
                  주문하시겠습니까?   
                <div id="order_bottom">
                <button id="order_btn" type="submit" onClick={() => donationOrder()}>확인</button>
                </div> </Modal>       
        </div>
        </div> 
        </div>
    );
}
export default DonationDetail;