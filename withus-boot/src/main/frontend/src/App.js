import { Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './Components/Main/Header.js';
import MainCategory from './Components/Main/MainCategory.js';
import Main from './Components/Main/Main.js';
import Item from './Components/Item/ItemMain.js';
import GroupItem from './Components/GroupItem/GroupItemMain.js';
import GroupItemDetail from './Components/GroupItem/GroupItemDetail.js';
import Register from './Components/Member/User_register.js';
import Login from './Components/Member/User_login.js';
import Order from './Components/Order/Order.js';
import DonationView from './Components/Donation/DonationView.js';
import DonationDetail from './Components/Donation/DonationDetail.js';
import DonationMain from './Components/Donation/DonationMain.js';
import Likepage from './Components/Mypage/Likepage';
import MyWritepage from './Components/Mypage/MyWritepage';
import MyDonation from './Components/Mypage/MyDonation';
import MyItem from './Components/Mypage/MyItem';
import MyGroupItem from './Components/Mypage/MyGroupItem';
import MyInfo from './Components/Mypage/MyInfo';
import MyCart from './Components/Mypage/MyCart';
import ItemWrite from './Components/Item/ItemWrite';
import ItemDetail from './Components/Item/ItemDetail';
import Chat from './Components/Item/Chat';

function App() {
  //카트

  return (
    <div className="App">
      <Header/>
      <MainCategory/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/item" element={<Item />}/>
        <Route path="/groupItem" element={<GroupItem />}/>
        <Route path="/groupItem/detail/:id" element={<GroupItemDetail />}/>
        <Route path="/groupItem/order" element={<Order />}/>
        <Route path="/donationList" element={<DonationView />}/>
        <Route path="/donationList/detail/:id" element={<DonationDetail />}/>
        <Route path="/donation" element={<DonationMain />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mypage-likeItem" element={<Likepage />}/>
        <Route path="/mypage-mywrite" element={<MyWritepage />} />
        <Route path="/mypage-mydonation" element={<MyDonation />} />
        <Route path="/mypage-myitem" element={<MyItem />} />
        <Route path="/mypage-mygroupitem" element={<MyGroupItem />} />
        <Route path="/mypage-myinfo" element={<MyInfo />} />
        <Route path="/mypage-mycart" element={<MyCart />} />
        <Route path="/itemwrite" element={<ItemWrite />} />
        <Route path="/item/detail/:id" element={<ItemDetail />} />

        <Route path="/chat" element={<Chat />} />

      

      </Routes>
    </div>
  );
}

export default App;