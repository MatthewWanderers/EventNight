class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def show
    @location = Location.find(params[:id])
    # @categories = Event.category_id.keys
  end
end
