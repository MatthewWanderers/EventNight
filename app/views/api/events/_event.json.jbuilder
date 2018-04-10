json.extract! event, :id,
              :title,
              :description,
              :organizer_id,
              :img_url,
              :address,
              :category_id
json.set! :start_time, event.start.localtime.strftime("%^b %-d, %-l:%M%p")
json.set! :end_time, event.end.localtime.strftime("%^b %-d, %-l:%M%p")


# json.image_url asset_path(event.img_url)
