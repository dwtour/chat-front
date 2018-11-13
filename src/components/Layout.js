import React from 'react'
import Messages from 'Messages'
import Input  from 'Input'

const Layout = () =>
    <div className="chat-layout__messages" id="messages-container">
        <Messages />
        <Input />
    </div>

export default Layout;