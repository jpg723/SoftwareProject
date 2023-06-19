import React from 'react'
import ChatRoom from './ChatRoom'
import { useLocation } from "react-router-dom";
const Chat = () => {
  const location = useLocation();
	const seller = location.state.seller;
  
  return (
    <ChatRoom seller={seller}/>
  )
}

export default Chat;

