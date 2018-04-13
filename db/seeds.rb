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
Location.create(city_name: "Other", description: "These events are in other cities around the bay area. Each and every city is a great place in it's own right!  Did you know that there are over 80 municipalities in the SF Bay Area acording to California Census data? We hope you find something cool to do in one of them!")

Event.create(
  title: "Celebrity Chef Ian Kittichai Pop-Up Dinner",
  description: "Chef Ian Kittichai is one of Thailand's most successful Iron Chefs.
  He has created award-winning restaurants across the globe including Bangkok, Barcelona, Hong Kong, Mumbai, New York and Singapore.
  One of his most successful outlets, Issaya Siamese Club, has been listed as one of Asia’s 50 Best Restaurants, sponsored by S. Pellegrino and Aqua Panna since 2014 to today.",
  organizer_id: 3,
  start: DateTime.now,
  end: (DateTime.now.advance(:hours => 3)),
  img_url: "http://res.cloudinary.com/do2qcwqsc/image/upload/v1523568969/event_seed_1.png",
  location_id: (1..6).to_a.sample,
  category_id: 1
)

# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "These Guys Sing",
  description: "They sing AND dance.",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523467605/tg5ksglitcbarps5crvi.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 0
)

# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "These Flowers Sing",
  description: "They sing very quietly.",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523462719/sample.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 4
)

# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "AppAcademy Hackathon",
  description: "Come have fun and hack something with us. We have prizes!",
  organizer_id: 4,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523565827/kd6auoy8bzdkwrrcihlp.jpg",
  location_id: 1,
  category_id: 6
)
# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "San Jose State Quidditch TRY-OUTS",
  description: "Come prove your mettle! Our team has gone to nationals and we regularly play other local teams (and Kick their butts)!",
  organizer_id: 1,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523589793/sjsu-quidditch.jpg",
  location_id: 4,
  category_id: 5
)
# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "Typical day at Cal. Come protest with us!",
  description: "Bring bottled water and your outside voice.",
  organizer_id: 2,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523568510/AUG_25-copy-e1503276168691.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 6
)
# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6
Event.create(
  title: "First Friday San Jose(Now coming to a city near YOU!)",
  description: "Now expanding to random days of the week and random cities throughout the bay area!
  See if you can find our pop-up event full of street-food, live music, and more!",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566971/1_ky40j5X-OrINlY3muivD4A.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 4
)

Event.create(
  title: "A really good cat",
  description: "The title says it all.",
  organizer_id: 3,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523484508/weadae04w1opvh7gi3aa.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 3
)
# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "San Francisco Community Choir performs this year's top Pop hits!",
  description: "They'll be performing a sampliung of this year's top songs plus a smattering of Michael Jackson.
  Get your tickets now, you don't want to miss out!",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523567174/maxresdefault.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 0
)

# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "First Friday San Jose",
  description: "Now expanding to random days of the week and random cities throughout the bay area!
  See if you can find our pop-up event full of street-food, live music, and more!",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566971/1_ky40j5X-OrINlY3muivD4A.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 3
)
# Music: 0,
# :"Food & Drink" => 1,
# Classes: 2,
# Arts: 3,
# Parties: 4,
# :"Sports & Wellness" => 5,
# Networking: 6

Event.create(
  title: "Alameda Art Walk",
  description: "The title says it all.",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566842/whiteelephantsale_mural_by_Griffin_Vogue_doty.jpg",
  location_id: 6,
  category_id: 3
)
Event.create(
  title: "First Friday San Jose",
  description: "Now expanding to random days of the week and random cities throughout the bay area!
  See if you can find our pop-up event full of street-food, live music, and more!",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566971/1_ky40j5X-OrINlY3muivD4A.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 1
)
Event.create(
  title: "Let's learn to Fish",
  description: "Come on down and learn to fish. Hosted by the 'We just like to fish' local chapter.",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566887/IMG_8039.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 5
)
Event.create(
  title: "First Friday San Jose(Now coming to a city near YOU!)",
  description: "Now expanding to random days of the week and random cities throughout the bay area!
  See if you can find our pop-up event full of street-food, live music, and more!",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523566971/1_ky40j5X-OrINlY3muivD4A.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 4
)
Event.create(
  title: "Learn to chop like a pro",
  description: "Master-Chef Alton Ramsey teaches you only the best way to chop your vegetables.
  As a bonus, learn to slice bread, salmon, and tender tofu. ",
  organizer_id: (1..9).to_a.sample,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523567071/Bagel_Spread.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 2
)

Event.create(
  title: "LGBTQ Happy Hour",
  description: "Come on down and let loose! We're here to mingle and relax after a long week of the daily grind.
  Meet some like-minded folxs and grab a beer or two",
  organizer_id: 1,
  start: (x = Faker::Time.forward(40)),
  end: (x + 2.hours),
  img_url: "https://res.cloudinary.com/do2qcwqsc/image/upload/v1523568654/1281489019cocktail.jpg",
  location_id: (1..6).to_a.sample,
  category_id: 6
)
