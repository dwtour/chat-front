import React from 'react';

import '../styles/index.scss';

import Input from '../containers/Input';
import Messages from '../containers/Messages';
import Button from '../containers/Button';

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
