import '../../Css/Main.css';
import mainpage from '../../img/mainpage.png';
import React, { useState} from 'react';
import {Link} from 'react-router-dom';

function Main() {

  const [search, setSearch] = useState(""); //통합검색

  const searching = e => {
    setSearch(e.target.value);
  }

  
  const [isSearch, setIsSearch] = useState(false);

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      document.location.href = "/search";
    }
  };
  console.log(isSearch);

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
          <div class="main1_content3">
              < text>원하는 상품을 검색해보세요!</text>
          </div>
          <div class="header_content2">
              <input class="search_box" placeholder="검색어를 입력해주세요" onChange={searching} onKeyPress={onSubmitSearch}></input>
              <Link to="/search" state={{searchs:search}}>
                <button className="search_btn">SEARCH</button>
              </Link>
          </div>
          <div id="main_2">
            <img class="mainpage_bg" src={mainpage}></img>
          </div>
          <div class="main-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
