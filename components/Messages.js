import React from 'react'
import MessageFrom from 'MessageFrom'
import MessageTo from 'MessageTo'

const Messages = () =>
        <div className="chat-layout__messages" id="messages-container">
            <MessageFrom />
            <MessageFrom />
            <MessageTo />
            <MessageFrom />
        </div>

export default Messages;