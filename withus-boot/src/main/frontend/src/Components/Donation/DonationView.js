import '../../Css/Donation.css';
import styles from "../../Css/Product.module.css";
import donation_image from '../../img/donation_image.png';
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function DonationView(props) {

    const [donationList , SetDonationList] = useState([]);

    useEffect(()=> {
        axios.get('/donationList').then((res)=>{
            SetDonationList(res.data)
            console.log(res)
        })
        .catch(error => console.log(error))
      },[]);

 return (
    <div id="donation_view_main">
    {
    donationList.map(function(a,i){
    return(
            <div className="donation">
                <Link to={'/donationList/detail/'+a.donation_id}> 
                <img className="donation_image" src={process.env.PUBLIC_URL+ '/' + a.img}></img>
                </Link>
                <span className="donation_info">
                    <div className="donation_name"> {a.donation_name}</div>
                </span>
                
            </div>
    )           
    })
    }
    </div>   
    );
}

export default DonationView;