import { eventTypes } from '../constants/event-types';

export function onMessageEventReceived(setMessages) {
  return function (event) {
    const eventType = event.event_type;
    const data = event.data;
    switch (eventType) {
      case eventTypes.messageCreated:
        setMessages((prevMessages) => [...prevMessages, data]);
        break;
      case eventTypes.messageDeleted:
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== data));
        break;
      case eventTypes.messageUpdated:
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          const indexOfMessage = updatedMessages.findIndex((message) => message.id === data.id);
          updatedMessages[indexOfMessage] = data;
          return updatedMessages;
        });
        break;
      default:
        console.error(`Unexpected event ${eventType} received`);
    }
  };
}
