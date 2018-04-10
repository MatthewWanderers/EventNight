json.partial! 'api/events/event',
              event: @event,
              location: @location
json.set! :organizer_description, @event.organizer.organizer_description
json.set! :organizer, @event.organizer.username
json.extract! @location, :city_name
