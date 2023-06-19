import '../../Css/Donation.css';
import styles from '../../Css/DonationDetail.module.css';
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link, useParams } from 'react-router-dom';

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
    <div className={styles.donation_comments}>
        <div className={styles.comment_header}>기부응원글</div>
    {
        commentList.map(function(a,i){
        return(
                <div className={styles.donation_comment_content}>
                    <div className={styles.donation_comment_id}> {a.user_id}</div>
                    <div className={styles.donation_comment}> {a.comments}</div>
                </div>
            )           
        })
    }
    </div>   
    );
}

export default DonationComments;