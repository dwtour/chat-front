import React from 'react'
import Button from 'Button'
import Id from 'Id'

const Input = () =>
    <div className="chat-layout__client-wrapper">
        <div className="chat-layout__client-wrapper__input-wrapper">
            <input type="text" className="chat-layout__client-wrapper__input-wrapper__message-wrapper"
                   id="message-input">
                    <Button />
            </input>
        </div>
        <Id />
    </div>

export default Input;