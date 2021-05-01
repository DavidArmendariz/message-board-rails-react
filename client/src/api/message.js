import env from '../config/environment';

export default class MessageApi {
  static getUrl(id) {
    return `${env.api.url}/messages${id ? `/${id}` : ''}.json`;
  }

  static getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  static getMessages() {
    return fetch(this.getUrl(), {
      method: 'GET',
    });
  }

  static createMessage(data) {
    return fetch(this.getUrl(), {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
  }

  static deleteMessage(id) {
    return fetch(this.getUrl(id), {
      method: 'DELETE',
    });
  }

  static updateMessage(id, body) {
    return fetch(this.getUrl(id), {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(body),
    });
  }
}
