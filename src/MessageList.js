import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <div>{message.text}</div>
          <div className="timestamp">{message.timestamp.toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;