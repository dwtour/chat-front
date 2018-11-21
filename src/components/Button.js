import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setInput, sendClientMessage } from '../actions';


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

const mapDispatchToProps = dispatch => ({
  sendAndClear: (text) => {
    dispatch(sendClientMessage(text));
    dispatch(setInput(''));
  },
});

const mapStateToProps = state => ({
  inputData: state.inputData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
