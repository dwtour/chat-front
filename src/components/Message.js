import React from 'react';

const Message = message =>
      <div className={message.type}>
        <p className="text">{message.text}</p>
      </div>;

export default Message;
