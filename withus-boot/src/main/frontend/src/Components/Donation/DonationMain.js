import '../../Css/Donation.css';
import DonationView from './DonationView.js';
import axios from 'axios';
import React, { useState, useEffect } from "react";


function DonationMain() {
    const [donationList , SetDonationList] = useState([]);

    useEffect(()=> {
        axios.get('/donationList').then((res)=>{
            SetDonationList(res.data)
            console.log(res)
        })
        .catch(error => console.log(error))
      },[]);

      const handleListData = (e) => {
        const value =e.target.value;
       
        let url;
        if(value === "new")
            url="new";
        if(value ==="like")
            url = "like"
        if(value === "closedate")
           url="closedate"

        axios.get(`/donationList/${url}`).then((res)=>{
            SetDonationList(res.data)
           console.log(res)
        })
        .catch(error => console.log(error))
    }

  return (
    <div>
        <h1 id="donation_header">기부</h1>
        <div id="donation_main">
            <div id="donation_view">
                <div id="donation_view_header">
                    <div id="donation_list">
                        <button class="donation_list_content" value="new" onClick={handleListData}>최신순</button>
                        <div class="donation_list_content">|</div>
                        <button class="donation_list_content" value="like" onClick={handleListData}>찜하기순</button>
                        <div class="donation_list_content">|</div>
                        <button class="donation_list_content" value="closedate" onClick={handleListData}>마감일순</button>
                    </div>
                </div>
                <div id="donation_view_main">
                    <DonationView donationList={donationList}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DonationMain;