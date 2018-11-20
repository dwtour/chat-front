import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setInputHandlerFlag } from '../actions';


const Button = (props) => {
  return (
    <button
      className="basic-button"
      onClick={() => {
          props.dispatch();
      }
    }
    >
    SEND
    </button>
  );
};

Button.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch: () => {
    dispatch(setInputHandlerFlag(true));
  },
});

export default connect(() => ({}), mapDispatchToProps)(Button);
