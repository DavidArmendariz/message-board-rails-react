import { useCallback, useEffect, useState } from 'react';
import appStyles from './App.module.scss';
import Header from './components/Header';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import ActionCableConsumer from './actioncable/consumer';
import env from './config/environment';
import ToastNotification from './components/ToastNotification';
import MessagesProvider from './providers/Messages';

function App() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const onReceived = useCallback(
    (data) => {
      setMessages([...messages, data]);
    },
    [messages]
  );

  useEffect(() => {
    const { url, messageChannelName } = env.actionCable;
    const actionCableConsumer = new ActionCableConsumer(url, messageChannelName, onReceived);
    actionCableConsumer.subscribe();
  }, [onReceived]);

  return (
    <MessagesProvider messages={messages} setMessages={setMessages}>
      <div className={appStyles.root}>
        <ToastNotification />
        <Header open={open} setOpen={setOpen} />
        <NewMessage open={open} setOpen={setOpen} />
        <Messages />
      </div>
    </MessagesProvider>
  );
}

export default App;
