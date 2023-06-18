import '../../Css/Main.css';
import mainpage from '../../img/mainpage.jpg';
import React from 'react';

function Main() {
  return (
    <div>
      <div id="main">
          
          <div id="main_1">
              <div class="main1_content1">
                  <text>구호물품 후원&거래 서비스</text>
              </div>
              <div class="main1_content2">
                  <text>95창고</text>
              </div>
          </div>
          <div id="main_2">
              <img class="mainpage_bg" src={mainpage}></img>
          </div>
      </div>
    </div>
  );
}

export default Main;
