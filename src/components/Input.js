import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setInput } from '../actions';

const Input = props =>
    <input
      type="text"
      className="message-wrapper"
      id="input"
      onChange={(e) => {
        props.save(e.target.value);
      }}
      value={props.inputData}
    />;


Input.propTypes = {
  inputData: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  save: (input) => {
    dispatch(setInput(input));
  },
});

const mapStateToProps = state => ({
  inputData: state.inputData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
