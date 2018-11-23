import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import { setInput, sendClientMessage } from '../actions';
import ChatBox from '../containers/ChatBox';


const Button = props =>
    <button
      className="basic-button"
      onClick={() => {
          props.sendAndClear(props.inputData);
      }
    }
    >
    SEND
    </button>;

Button.propTypes = {
  sendAndClear: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,
};

compose(
  connect(),
  withState('prop', 'setProp', 'initialValue'),
  lifecycle({
    componentDidMount() {
    },
  }),
)(Button);

export default Button;
