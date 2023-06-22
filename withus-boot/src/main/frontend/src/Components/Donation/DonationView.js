import '../../Css/Donation.css';
import React from "react";
import { Link } from 'react-router-dom';

function DonationView({donationList}) {

 return (
    <div id="donation_view_main">
    {
    donationList.map(function(a,i){
    return(
            <div className="donation" style={{flexDirection:"row", flexWrap:"wrap"}}>
                <Link to={'/donationList/detail/'+donationList[i].donation_id}> 
                <img className="donation_image" src={process.env.PUBLIC_URL+ '/' + donationList[i].img}></img>
                </Link>
                <div className="donation_info">
                    <div className="donation_name"> {donationList[i].donation_name}</div>
                    <div class="donation-price-box">
                        <div class="donation-price-box-content">지금까지</div>
                        <div className="donation-view-totalPrice"> {donationList[i].totalDonationPrice}원</div>
                    </div>
                    <div class="donation-view-state">{donationList[i].donation_state === 0 ? <div>진행중</div> : <div>종료</div>}</div>
                </div>
                
            </div>
    )           
    })
    }
    </div>   
    );
}

export default DonationView;