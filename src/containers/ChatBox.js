import React from 'react';
import { compose, withState, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Messages from '../components/Messages';
import Button from '../components/Button';
import '../styles/index.scss';


const ChatBox = () =>
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
  </div>;

compose(
  connect(),
  withState('prop', 'setProp', 'initialValue'),
  lifecycle({
    componentDidMount() {
    },
  }),
)(ChatBox);
export default ChatBox;
