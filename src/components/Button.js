import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import { setInput, sendClientMessage } from '../actions';


const Button = withState('inputData', 'sendAndClear')(({ inputData, sendAndClear }) =>
    <button
      className="basic-button"
      onClick={() => {
          sendAndClear(inputData);
      }
    }
    >
    SEND
    </button>);

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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState,
)(Button);
