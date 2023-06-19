import '../../Css/Donation.css';
import React from "react";
import { Link } from 'react-router-dom';

function DonationView({donationList}) {

 return (
    <div id="donation_view_main">
    {
    donationList.map(function(a,i){
    return(
            <div className="donation">
                <Link to={'/donationList/detail/'+donationList[i].donation_id}> 
                <img className="donation_image" src={process.env.PUBLIC_URL+ '/' + donationList[i].img}></img>
                </Link>
                <span className="donation_info">
                    <div className="donation_name"> {donationList[i].donation_name}</div>
                </span>
                
            </div>
    )           
    })
    }
    </div>   
    );
}

export default DonationView;