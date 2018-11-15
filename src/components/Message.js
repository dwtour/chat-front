import React from 'react';
import PropTypes from 'prop-types';

const Message = ( {type, text} ) =>
      <div className={type === 'from' ? "message-from" : "message-to"}>
        <p className="text">{text}</p>
      </div>;

Message.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Message;
