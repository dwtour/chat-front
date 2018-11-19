import { connect } from 'react-redux';
import MessagesComponent from '../components/Messages';

const Messages = connect(state => ({
  messages: state.messages,
}), {})(MessagesComponent);

export default Messages;
