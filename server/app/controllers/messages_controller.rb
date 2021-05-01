class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    @message = Message.new(message_params)

    if @message.save
      ActionCable.server.broadcast(MessageChannel::CHANNEL_NAME, { event_type: MessageChannel::MESSAGE_CREATED, data: @message })
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      ActionCable.server.broadcast(MessageChannel::CHANNEL_NAME, { event_type: MessageChannel::MESSAGE_UPDATED, data: @message })
      render json: @message, status: :ok
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
    if @message.destroyed?
      ActionCable.server.broadcast(MessageChannel::CHANNEL_NAME, { event_type: MessageChannel::MESSAGE_DELETED, data: @message.id })
      render status: :ok
    else
      render json: @message.errors, status: :internal_server_error
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:title, :body)
    end
end
