import '../../Css/Donation.css';
import DonationView from './DonationView.js';
import React from 'react';

function DonationMain() {
  return (
    <div>
        <h1 id="donation_header">기부</h1>
        <div id="donation_main">
            <div id="donation_view">
                <div id="donation_view_header">
                    <div id="donation_list">
                        <div class="donation_list_content">신상품순</div>
                        <div class="donation_list_content">|</div>
                        <div class="donation_list_content">찜개수 순</div>
                        <div class="donation_list_content">|</div>
                        <div class="donation_list_content">마감전순</div>
                    </div>
                </div>
                <div id="donation_view_main">
                    <DonationView/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DonationMain;