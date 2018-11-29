import React from 'react';
import PropTypes from 'prop-types';


const Username = ({ handlePress, cachedUser }) =>
  <div className="username-form">
    Enter username:
    <input
      className="username-input"
      type="text"
      value={cachedUser.name}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          const myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
          myHeaders.append('Token', 'RsIEKqm2X8nLDVA8kKlHnO6iR1CMsFW9');

          const myInit =
          {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({ username: e.target.value }),
          };

          const myRequest = new Request('https://chat.empo.io/v1/user/', myInit);

          fetch(myRequest).then(response => response.json())
            .then((responseBody) => {
            // alert(`Обработали респонс: ${JSON.stringify(responseBody)}`);
            const user = {
              token: responseBody.data.token,
              name: e.target.value,
            };
            handlePress(user);
          }).catch((error) => {
            alert(`error: ${error.message}`);
          });
        }
      }}
    />
  </div>;

Username.propTypes = {
  handlePress: PropTypes.func.isRequired,
  cachedUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

export default Username;

