import '../../Css/Donation.css';
import styles from '../../Css/DonationDetail.module.css';
import donation_image from '../../img/donation_image.png';
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link, useParams } from 'react-router-dom';
import {donation} from '../Donation/DonationDetail.js'

function DonationComments(props) {

    let {id} = useParams();

    const [commentList , SetcommentList] = useState([]);

    useEffect(()=> {
        axios.get('/donation/comments/'+ id ).then((res)=>{
            SetcommentList(res.data)
            console.log(res)
        })
        .catch(error => console.log(error))
      },[]);

 return (
    <div id="donation_view_main">
    {
    commentList.map(function(a,i){
    return(
            <div className={styles.groupItemInfo}>
                <div className={styles.sum}> {a.user_id}님의 코멘트 </div>
                <div className={styles.total}> {a.comments}</div>
            </div>
    )           
    })
    }
    </div>   
    );
}

export default DonationComments;