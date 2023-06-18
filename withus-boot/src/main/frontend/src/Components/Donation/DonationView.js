import '../../Css/Donation.css';
import '../../Css/GroupItem.css';
import styles from "../../Css/Product.module.css";
import donation_image from '../../img/donation_image.png';
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function DonationView() {

    const [donationList , SetDonationList] = useState([]);

    useEffect(()=> {
        axios.get('/donationList').then((res)=>{
            SetDonationList(res.data)
            console.log(res)
        })
        .catch(error => console.log(error))
      },[])

 return (
    <div id="donation_view_main">
{
    donationList.map(function(a,i){
    return(
            <div className="donation">
                <Link to={'/donationList/detail/'+a.donation_id}> 
                <img className="donation_image" src={donation_image}></img>
                <span className="donation_info">
                    <div className="donation_name">이름 {a.donation_name}</div>
                    <div className="donation_likeCount">찜개수 {a.like_count}</div>
                    <div className="donation_state">마감 {a.donation_closeState}</div>
                </span>
                </Link>
            </div>
   )           
})
}
</div>   
);
}

export default DonationView;