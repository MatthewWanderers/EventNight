# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create(username: 'Matthew', email: 'MattWanderers@gmail.com', password: 'password')
Event.create!(title: "Celebrity Chef Ian Kittichai Pop-Up Dinner", description: "Chef Ian Kittichai is one of Thailand's most successful Iron Chefs. He has created award-winning restaurants across the globe including Bangkok, Barcelona, Hong Kong, Mumbai, New York and Singapore. One of his most successful outlets, Issaya Siamese Club, has been listed as one of Asia’s 50 Best Restaurants, sponsored by S. Pellegrino and Aqua Panna since 2014 to today.", organizer_id: 3, start: DateTime.now, end: (DateTime.now.advance(:hours => 3)), img_url: "https://i.imgur.com/egdu70D.png", location_id: 1, category_id: 2)
