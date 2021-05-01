export function onMessageEventReceived(setMessages) {
  return function (event) {
    const eventType = event.event_type;
    const data = event.data;
    switch (eventType) {
      case 'message_created':
        setMessages((prevMessages) => [...prevMessages, data]);
        break;
      case 'message_deleted':
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== data));
        break;
      case 'message_updated':
        setMessages((prevState) => {
          const updatedMessages = [...prevState];
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
