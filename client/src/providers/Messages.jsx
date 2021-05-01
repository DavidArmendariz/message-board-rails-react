import React from 'react';
import { MessagesContext } from '../contexts';

const MessagesProvider = (props) => {
  const { messages, setMessages } = props;
  return <MessagesContext.Provider value={{ messages, setMessages }}>{props.children}</MessagesContext.Provider>;
};

export default MessagesProvider;
