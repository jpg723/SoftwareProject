import React, {useState} from "react";
import '../../Css/Message.css';
import Messages from './Messages';

function MessageBox() {

    const [sendMessage, setSendMessage] = useState(false);

    const offSendMessage = () => {
        setSendMessage(false);
    }

    const onSendMessage = () =>{
        setSendMessage(true);
    }
    return (
        <div>
            <div className="message-header">
                <div><button className="m-header-content1" onClick={offSendMessage}>받은 쪽지함</button></div>
                <div><button className="m-header-content1" onClick={onSendMessage}>보낸 쪽지함</button></div>
            </div>
            {sendMessage ? null : <Messages/>}
        </div>    
  );
}

export default MessageBox;