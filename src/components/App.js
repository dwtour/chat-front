import React, { Component} from 'react';

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
          type: 'message-from',
          text: '#user1 join',
        },
        {
          type: 'message-from',
          text: '#user2 leave',
        },
        {
          type: 'message-to',
          text: 'You: hello hello hello hello hello hello hello',
        },
        {
          type: 'message-from',
          text: '#user3: hello there',
        },
      ],
    };
  }

  submitMessage() {
    const input = document.getElementById('input');
    if (input.value.length === 0) {
      alert('Попытка отправить пустое сообщение');
    } else {
      const joined = this.state.messages.concat({ type: 'message-to', text: 'You: ' + input.value });
      this.setState({ messages: joined });
      input.value = '';
    }
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
                        <Input id="input" />
                        <Button submitMessage={this.submitMessage.bind(this)} />
                    </div>
                    <p className="ip">you joined as 127:0:0:1</p>
                </div>
                </div>
            </div>
    );
  }
}

export default App;
