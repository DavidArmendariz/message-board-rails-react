import { createConsumer } from '@rails/actioncable';

export default class ActionCableConsumer {
  constructor(url, channelName, receivedCallback) {
    this.url = url;
    this.channelName = channelName;
    this.receivedCallback = receivedCallback;
    this.cable = this.buildConsumer();
  }
  buildConsumer() {
    return createConsumer(this.url);
  }
  subscribe() {
    return this.cable.subscriptions.create(this.channelName, {
      connected: this.connected.bind(this),
      disconnected: this.disconnected.bind(this),
      received: this.received.bind(this),
    });
  }
  connected() {
    console.log('connected');
  }
  disconnected() {
    console.log('disconnected');
  }
  received(data) {
    this.receivedCallback(data);
  }
}
