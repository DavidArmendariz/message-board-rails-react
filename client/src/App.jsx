import { useEffect, useState } from 'react';
import appStyles from './App.module.scss';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import NewMessage from './components/NewMessage/NewMessage';
import ActionCableConsumer from './actioncable/consumer';
import env from './config/environment';
import ToastNotification from './components/ToastNotification/ToastNotification';
import MessagesProvider from './providers/Messages';
import { onMessageEventReceived } from './actioncable/messages';

function App() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { url, messageChannelName } = env.actionCable;
    const actionCableConsumer = new ActionCableConsumer(url, messageChannelName, onMessageEventReceived(setMessages));
    actionCableConsumer.subscribe();
  }, []);

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
