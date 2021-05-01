import React, { useContext, useEffect } from 'react';
import messagesStyles from './Messages.module.scss';
import { useQuery } from 'react-query';
import MessageApi from '../api/message';
import CustomSpinner from './CustomSpinner';
import Message from './Message';
import { MESSAGES_QUERY } from '../constants/queries';
import { MessagesContext } from '../contexts';
import CustomAlert from './CustomAlert';

const Messages = () => {
  const { messages, setMessages } = useContext(MessagesContext);
  const { isLoading, error, data } = useQuery(MESSAGES_QUERY, () => MessageApi.getMessages().then((res) => res.json()));

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [setMessages, data]);

  if (isLoading) {
    return (
      <div className={messagesStyles.center}>
        <CustomSpinner />
      </div>
    );
  }

  if (error) {
    return <CustomAlert text="Failed to fetch messages. Please try again." />;
  }

  const renderedMessages = messages
    .sort((message1, message2) => Date.parse(message2.created_at) - Date.parse(message1.created_at))
    .map((message) => <Message key={message.id} message={message} />);
  return <div>{renderedMessages}</div>;
};

export default Messages;
