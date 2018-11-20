import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendClientMessage, setInputHandlerFlag } from '../actions';

class Input extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    inputHandlerFlag: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.input = '';
  }

  render() {
    if (this.props.inputHandlerFlag) {
      this.props.dispatch(this.input.value);
      this.input.value = '';
    }

    return (
      <input
        type="text"
        className="message-wrapper"
        id="input"
        ref={(node) => { this.input = node; }}
        onChange={() => this.onHandle(this.input.value)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandle: input => dispatch(sendClientMessage(input)),
    dispatch: () => {
      dispatch(setInputHandlerFlag(false));
      // dispatch(sendClientMessage(input));
    },
  };
};


const mapStateToProps = (state) => {
  return {
    inputHandlerFlag: state.inputHandlerFlag,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
