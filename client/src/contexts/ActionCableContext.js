import React from 'react';
import ActionCableConsumer from '../actioncable/consumer';
import env from '../config/environment';

export const ActionCableContext = React.createContext();

export default function ActionCableProvider(props) {
  const { url, messageChannelName } = env.actionCable;
  const messageChannel = new ActionCableConsumer(url, messageChannelName).getSubscription();
  return <ActionCableContext.Provider value={messageChannel}>{props.children}</ActionCableContext.Provider>;
}
