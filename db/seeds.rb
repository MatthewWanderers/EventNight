# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'Matthew M.', email: 'MattWanderers@gmail.com', password: 'javajava')
User.create(username: 'Demo Account', email: 'demo@demo.com', password: 'password')
User.create(username: 'Nick W.', email: 'nick@nick.com', password: 'sadfghf')
User.create(username: 'Andres A.', email: 'andres@andres.com', password: 'afsdgh')
User.create(username: 'Jon H.', email: 'demo@demo0.com', password: 'rwety')
User.create(username: 'Tiffany H.', email: 'demo@demo1.com', password: 'xvcnmb')
User.create(username: 'Walter W.', email: 'demo@de2mo.com', password: 'wtryartry')
User.create(username: 'Brie M.', email: 'demo@demo3.com', password: '34567gfh')
User.create(username: 'Travis T.', email: 'demo@de4mo.com', password: 'afsdgfdhgfd4')

Location.create(city_name: "San Francisco", description: "San Francisco has something for everyone. Foodies should grab a burrito in the Mission and hit up Farmer's Market at the Ferry Building. Shop shoes and boutiques in Hayes Valley. Get outside and stroll Golden Gate Park, say 'Hi' to the Bison (seriously). See the city from the water take a ferry or catamaran under the bridge. Check out current events below.")
Location.create(city_name: "Berkeley", description: "Laid-back Berkeley is home to students, visionaries, and environmentalists. Head to Tilden Regional Park to witness the beauty of Wildcat Canyon or check out the film collection at the Berkeley Art Museum.")
Location.create(city_name: "Oakland", description: "Oakland's thriving scene offers up great music, events, eats, drinks and outdoorsy fun. Hit Uptown for a show at the Fox and grab a bite at any nearby eatery. Cruise around Lake Merritt or take in the views from Joaquin Miller. Shop fresh at Grand Lake Farmer's Market. Cocktail around galleries on First Friday Art Walks.")
Location.create(city_name: "San Jose", description: "San Jose offers up great eats, hot events and a healthy dose of non-tech stuff to do. There's no shortage of wine bars, taprooms and solid burritos to be had. Head downtown to the Tech Museum of Innovation then cruise over to E/W Santa Clara for dinner and drinks. Catch a Sharks game. Stroll galleries at South First Fridays art walk.")
Location.create(city_name: "Palo Alto", description: "Looking for something to do in Palo Alto? Whether you're a local, new in town or just cruising through we've got loads of great tips and events. You can explore by location, what's popular, our top picks, free stuff... you got this. Ready?")
Location.create(city_name: "Mountain View", description: "Looking for something to do in Mountain View? Whether you're a local, new in town or just cruising through we've got loads of great tips and events. You can explore by location, what's popular, our top picks, free stuff... you got this. Ready?")
Location.create(city_name: "Other", description: "These events are in other cities around the bay area. Each and every city is a great place in it's own right!")

Event.create(
  title: "Celebrity Chef Ian Kittichai Pop-Up Dinner",
  description: "Chef Ian Kittichai is one of Thailand's most successful Iron Chefs.
  He has created award-winning restaurants across the globe including Bangkok, Barcelona, Hong Kong, Mumbai, New York and Singapore.
  One of his most successful outlets, Issaya Siamese Club, has been listed as one of Asia’s 50 Best Restaurants, sponsored by S. Pellegrino and Aqua Panna since 2014 to today.",
  organizer_id: 3,
  start: DateTime.now,
  end: (DateTime.now.advance(:hours => 3)),
  img_url: "http://res.cloudinary.com/do2qcwqsc/image/upload/v1523568969/event_seed_1.png",
  location_id: 1,
  category_id: 2
)
