class EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  def update
    @event = Event.find_by(id: params[:id])

    if current_user.id == @event.organizer_id
      if @event.update_attributes(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 404
      end
    else
      render json: ["You must be the event organizer"], status: 404
    end

  end

  def destroy
    @event = Event.find_by(event: params[:id])
    if @event && current_user.id == @event.organizer_id
      @event.delete
      render :show
    else
      render json: ["You must be the event organizer"], status: 404
    end
  end
end
