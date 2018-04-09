class EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
  end

  def create
  end

  def destroy
  end

  def update
  end
end
