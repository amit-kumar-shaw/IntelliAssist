import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatWindow() {
  const [messages, setMessages] = React.useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages(messages.concat({ text: newMessage, timestamp: new Date() }));
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatWindow;