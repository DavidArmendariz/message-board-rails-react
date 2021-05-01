const env = {
  actionCable: {
    url: process.env.REACT_APP_RAILS_ACTION_CABLE_URL,
    messageChannelName: process.env.REACT_APP_MESSAGE_CHANNEL_NAME,
  },
  api: {
    url: process.env.REACT_APP_API_URL,
  },
};

export default env;
