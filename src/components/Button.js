import React from 'react'
import {addMessage} from '/myscripts'

const Button = ({submitMessage}) =>
    <button className="chat-layout__client-wrapper__input-wrapper__send"
            onClick={() => submitMessage()}>SEND
    </button>

function addMessage(message) {

    var messages = document.getElementById("messages-container");

    var message_wrapper = document.createElement("div");
    message_wrapper.className = "chat-layout__messages__message-to";

    messages.appendChild(message_wrapper);

    var message_text = document.createElement("p");
    message_text.className = "chat-layout__messages__text";
    message_text.innerHTML = 'You: '+message;

    message_wrapper.appendChild(message_text);
}

function submitMessage()
{
    var inputField = document.getElementById('message-input');
    var input = inputField.value;

    if(input.length > 0){
        addMessage(input);
        inputField.value = '';
    }
    else alert('Попытка отправить пустое сообщение');
}

export default Button;