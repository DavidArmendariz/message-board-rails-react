import { createConsumer } from '@rails/actioncable';

export default class ActionCableConsumer {
  constructor(url, channelName) {
    this.url = url;
    this.channelName = channelName;
    this.cable = this.buildConsumer();
  }
  buildConsumer() {
    return createConsumer(this.url);
  }
  getSubscription() {
    return this.cable.subscriptions.create(this.channelName, {
      connected: this.connected,
      disconnected: this.disconnected,
      received: this.received,
    });
  }
  connected() {
    console.log('connected');
  }
  disconnected() {
    console.log('disconnected');
  }
  received(data) {
    console.log('data received', data);
  }
}
