json.location do
  json.extract! @location, :city_name, :description
  json.image.url asset_path(@location.header_img_url)
  json.event_ids @location.events.pluck(:id)
end

json.events do
  @location.events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end
