class Api::EventsController < ApplicationController
  def index
    events = Event.all.order(:start)
    if params[:city_name]
      params[:city] = params[:city_name]
      location = Location.find_by(city_name: params[:city])
      events = Event.where(location_id: location.id).order(:start)
    end

    if params[:category_id]
      events = events.where(category_id: params[:category_id])
    end

    @events = events
  end

  def show
    @event = Event.find(params[:id])
    @location = @event.location
  end

  def create
    @event = Event.new(event_params)
    @event.organizer = current_user
    @location = @event.location

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    @location = @event.location

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
    @event = Event.find(params[:id])
    if @event && current_user.id == @event.organizer_id
      @event.delete
      render :show
    else
      render json: ["You must be the event organizer"], status: 404
    end
  end

  private

  def event_params
    loc = Location.find_by(city_name: params[:event][:location])
    params[:event][:location_id] = loc.id
    params.require(:event).permit(
      :title,
      :description,
      :location_id,
      :start,
      :end,
      :img_url,
      :category_id,
      :address,
      :organizer_id
    )
  end
end
