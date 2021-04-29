class MessageChannel < ApplicationCable::Channel
  CHANNEL_NAME = 'message_board'
  def subscribed
    stream_from CHANNEL_NAME
  end

  def receive(data)
    broadcast(CHANNEL_NAME, data)
  end
end