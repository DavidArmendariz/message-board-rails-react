require "test_helper"

class MessageChannelTest < ActionCable::Channel::TestCase
  test "subscribes" do
    subscribe
    assert subscription.confirmed?
    assert_has_stream MessageChannel::CHANNEL_NAME
  end
end
