import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';
import Message from './Message';

import '../styles/index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          type: 'from',
          text: '#user1 join',
        },
        {
          type: 'from',
          text: '#user2 leave',
        },
        {
          type: 'to',
          text: 'You: hello hello hello hello hello hello hello',
        },
        {
          type: 'from',
          text: '#user3: hello there',
        },
      ],
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  onclick() {

    if (this.state.value.length === 0) {
      alert('Попытка отправить пустое сообщение');
    } else {
      const joined = this.state.messages.concat({type: 'to', text: 'You: ' + this.state.value});
      this.setState({ messages: joined, value: '' });
      document.getElementById("input").value = '';
      }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
            <div className="chat">
                <div className="chat-box" id="messages-container">
                    <div className="message">
                        {
                            this.state.messages.map(message => <Message
                                                                        type={message.type}
                                                                        text={message.text}
                            />)
                        }
                    </div>
                <div className="client-wrapper">
                    <div className="input-wrapper">
                        <Input
                              handleChange={this.handleChange}
                        />
                        <Button onclick={this.onclick} />
                    </div>
                    <p className="ip">you joined as 127:0:0:1</p>
                </div>
                </div>
            </div>
    );
  }
}


export default App;
