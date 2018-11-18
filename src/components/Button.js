import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  return(
    <button className="basic-button" onClick={() => {
          props.dispatch(props.text);
          document.getElementById("input").value = '';
      }
    }
    >
    SEND
    </button>
  );
};

Button.propTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
