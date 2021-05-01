class MessageChannel < ApplicationCable::Channel
  CHANNEL_NAME = 'message_board'
  MESSAGE_CREATED = 'message_created'
  MESSAGE_UPDATED = 'message_updated'
  MESSAGE_DELETED = 'message_deleted'
  def subscribed
    stream_from CHANNEL_NAME
  end

  def receive(data)
    broadcast(CHANNEL_NAME, data)
  end
end