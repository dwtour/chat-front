import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Messages from '../components/Messages';
import Button from '../components/Button';
import '../styles/index.scss';
import { saveInput } from '../actions';
import initialState from '../store/initialState';

const ChatBox = props =>
  <div className="chat">
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
          />
        </div>
        <p className="ip">you joined as 127:0:0:1</p>
      </div>
    </div>
  </div>;
ChatBox.propTypes = {
  inputData: PropTypes.string.isRequired,
  saveValue: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,

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
});

const mapStateToProps = state => ({
  inputData: state.inputData,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('messages', 'setMessages', []),
  withHandlers({
    sendMessage: props => () => props.setMessages(props.messages.concat(
      [{
        message: props.inputData,
        author: 'You',
        direction: 'to',
      }],
    )),
  }),
  lifecycle({
    componentDidMount() {
      console.timeStamp('Mount start');
      setTimeout(() => { this.props.setMessages(initialState.messages); }, 1500);
    },
  }),
)(ChatBox);
