import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Messages from '../components/Messages';
import Button from '../components/Button';
import Username from '../components/Username';
import '../styles/index.scss';
import { setToken, setUsername, saveInput } from '../actions';
import { convertMessages } from '../utils/dataConverter';

const ChatBox = props =>
  <div className="chat">
    <Username
      handlePress={(newObj) => { props.setToken(newObj.token); props.setUsername(newObj.name); }}
      cachedUser={props.user}
    />
    <div className="chat-box" id="messages-container">
      <Messages
        messages={props.messages}
      />
      <div className="client-wrapper">
        <div className="input-wrapper">
          <Input
            saveValue={(newValue) => { props.saveValue(newValue); }}
            inputData={props.inputData}
          />
          <Button
            handleClick={() => {
              props.sendMessage();
              props.clearInput();
            }}
            userToken={props.user.token}
          />
        </div>
        <p className="ip">you joined as 127:0:0:1</p>
      </div>
    </div>
  </div>;
ChatBox.propTypes = {
  inputData: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
  channelToken: PropTypes.string.isRequired,
  saveValue: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveValue: (input) => {
    dispatch(saveInput(input));
  },
  clearInput: () => {
    dispatch(saveInput(''));
  },
  setToken: (token) => {
    dispatch(setToken(token));
  },
  setUsername: (username) => {
    dispatch(setUsername(username));
  },
});

const mapStateToProps = state => ({
  inputData: state.inputData,
  user: state.user,
  channelToken: state.channelToken,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('messages', 'setMessages', []),
  withHandlers({
    sendMessage: props => () => {

      const messageData = {
        body: props.inputData,
        channelToken: props.channelToken,
        image: '',
        reply: 0,
        userToken: props.user.token,
      };

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      const myInit =
        {
          method: 'POST',
          headers: myHeaders,
          mode: 'cors',
          body: JSON.stringify(messageData),
        };

      const myRequest = new Request('https://chat.empo.io/v1/messages/', myInit);

      fetch(myRequest).then(response => response.json())
        .then((responseBody) => {
          if (responseBody.error) {
            alert(JSON.stringify(responseBody));
          } else {
            props.setMessages(props.messages.concat(
              [{
                message: props.inputData,
                author: 'You',
                direction: 'to',
              }],
            ));
          }
        }).catch((error) => {
          alert(`error: ${error.message}`);
        });
    },
  }),
  lifecycle({
    componentDidMount() {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
      myHeaders.append('Token', 'RsIEKqm2X8nLDVA8kKlHnO6iR1CMsFW9');

      const myInit =
        {
          method: 'GET',
          headers: myHeaders,
          mode: 'cors',
        };

      const query = `user=${this.props.user.token}`;
      const myRequest = new Request(`https://chat.empo.io/v1/messages/${this.props.channelToken}?${query}`, myInit);

      fetch(myRequest).then(response => response.json())
        .then((responseBody) => {
          this.props.setMessages(convertMessages(responseBody.data, this.props.user.name));
        }).catch((error) => {
          alert(`error: ${error.message}`);
        });
    },
  }),
)(ChatBox);
