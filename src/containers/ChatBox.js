import React from 'react';
import { compose, lifecycle } from 'recompose';

import Input from '../components/Input';
import Messages from '../components/Messages';
import Button from '../components/Button';
import '../styles/index.scss';

const initialState = {
  messages: [
    {
      message: 'join',
      direction: 'from',
      author: '#user1',
    },
    {
      message: 'leave',
      direction: 'from',
      author: '#user2',
    },
    {
      message: 'hello hello hello hello hello hello hello',
      direction: 'to',
      author: 'You',
    },
    {
      message: 'hello there',
      direction: 'from',
      author: '#user3',
    },
  ],
};

const ChatBox = () =>
  compose(
    lifecycle({
      componentDidMount() {
        setTimeout(() => {
          this.setState({ initialState });
        }, 500);
      },
    }),
  )(() => {
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
  });

export default ChatBox;
