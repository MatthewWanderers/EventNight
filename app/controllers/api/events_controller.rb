class Api::EventsController < ApplicationController
  def index
    events = Event.all
    #
    # if params[:location_id]
    #   events = events.where(location_id: params[:location_id])
    # end
    #
    # if params[:category_id]
    #   events = events.where(category_id: params[:category_id])
    # end
    #
    @events = events
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
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

  private

  def event_params
    params.require(:event).permit(
      :title,
      :description,
      :organizer_id,
      :img_url,
      :address,
      :start,
      :end
    )
  end
end
