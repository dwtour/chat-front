import React from 'react';

import '../styles/index.scss';

import Input from '../components/Input';
import Messages from '../components/Messages';
import Button from '../components/Button';

const ChatBox = () => {
  return (
    <div className="chat">
      <div className="chat-box" id="messages-container">
        <Messages />
        <div className="client-wrapper">
          <div className="input-wrapper">
            <Input />
            <Button />
          </div>
        <p className="ip">you joined as 127:0:0:1</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
