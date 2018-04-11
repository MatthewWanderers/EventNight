json.extract! event, :id,
              :title,
              :description,
              :organizer_id,
              :img_url,
              :address,
              :category_id,
              :start,
              :end,
              :location_id
json.set! :location, event.location.city_name
json.set! :start_time, event.start.localtime.strftime("%^b %-d, %-l:%M%p")
if event.end
  json.set! :end_time, event.end.localtime.strftime("%^b %-d, %-l:%M%p")
end


# json.image_url asset_path(event.img_url)
