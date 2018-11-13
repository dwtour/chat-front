import React from 'react'

const message = ['#user1 join', '#user2 leave', 'You: hello hello hello hello hello hello hello', '#user3: hello there'];

const Text = () =>
        <p className="text">{message[1]}</p>

export default Text;