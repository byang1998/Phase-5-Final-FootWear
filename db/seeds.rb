# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Cart.destroy_all
CartItem.destroy_all
Item.destroy_all
Review.destroy_all

#User.create(username: , email: , password: )
User.create(username: "First" , email: "First@first.com" , password: "first")
User.create(username: "Second" , email: "Second@second.com" , password: "second")

# Cart.create(user_id: )
Cart.create(user_id: User.first.id)

# Item.create(name: , cost: , image: , description: )
Item.create(name: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO' 2015", cost: "2300.00", image: "https://cdn.flightclub.com/750/TEMPLATE/012234/1.jpg" , description: "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway features full-leather uppers in Bulls team colors")
Item.create(name: "AIR JORDAN 3 RETRO 'POWDER BLUE'", cost: "400", image: "https://cdn.flightclub.com/2200/TEMPLATE/011859/1.jpg", description: "The Air Jordan 3 Retro 'Powder Blue' dresses Michael Jordan's third signature shoe in a vibrant Dark Powder Blue, which emerges on the upper's mix of leather and suede")
Item.create(name: "AIR JORDAN 4 RETRO 'UNIVERSITY BLUE'", cost:"450", image: "https://cdn.flightclub.com/750/TEMPLATE/186212/1.jpg", description: "The Air Jordan 4 Retro 'University Blue' looks to Michael Jordan's college days to inform its classic look")
Item.create(name: "AIR JORDAN 5 RETRO 'GRAPE' 2013", cost:"440", image: "https://cdn.flightclub.com/2200/TEMPLATE/011744/1.jpg", description: "The 2013 edition of the Air Jordan 5 Retro ‘Grape’ brings back one of the silhouette’s OG colorways from 1990")
Item.create(name: "AIR JORDAN 6 RETRO OG 'CARMINE' 2021", cost:"265", image: "https://cdn.flightclub.com/2200/TEMPLATE/186762/1.jpg", description:"The shoe's upper features a mix of leather and nubuck, finished in white and carmine, with black contrast completing the team look")
Item.create(name: "AIR JORDAN 7 RETRO 'RAPTOR' 2012", cost:"400", image: "https://cdn.flightclub.com/750/TEMPLATE/011617/1.jpg", description:"The 2012 Nike Air Jordan 7 'Raptor' provides a retro-released version of the OG 1992 colorway")
Item.create(name: "AIR JORDAN 10 RETRO 'CHARLOTTE HORNETS'", cost:"530", image: "https://cdn.flightclub.com/2200/TEMPLATE/012451/1.jpg", description:"Part of a revival of the 1995 City Pack, the Air Jordan 10 Retro 'Charlotte Hornets' gives the nod to the team Michael Jordan came to own in retirement.")
Item.create(name: "AIR JORDAN 10 RETRO 'POWDER BLUE' 2014", cost:"325" , image: "https://cdn.flightclub.com/2200/TEMPLATE/011872/1.jpg", description: "The Air Jordan 10 Retro ‘Powder Blue’ 2014 recreates an OG 1994 look, with a black and white tumbled leather upper highlighted by a Dark Powder Blue lining")
Item.create(name: "AIR JORDAN 11 RETRO 'COOL GREY' 2021", cost:"380", image: "https://cdn.flightclub.com/750/TEMPLATE/248952/1.jpg", description: "Released in December 2021, the Air Jordan 11 Retro 'Cool Grey' 2021 brings back a colorway from 2001 and 2010")
Item.create(name: "AIR JORDAN 11 RETRO 'CONCORD' 2018", cost: "600", image: "https://cdn.flightclub.com/750/TEMPLATE/805882/1.jpg", description: "The 2018 version of the Air Jordan 11 Retro ‘Concord’ shows off ‘45’ imprinted on the black heel tab in honor of the jersey number that Michael Jordan wore when he returned to the NBA after his first retirement")
Item.create(name: "AIR JORDAN 11 RETRO 'SPACE JAM' 2016", cost:"375", image: "https://cdn.flightclub.com/750/TEMPLATE/012597/1.jpg", description: "The 2016 reissue of the Air Jordan 11 Retro ‘Space Jam’ was successful enough that it surpassed all previous releases in Nike history to become the brand’s highest grossing sneaker to date")
Item.create(name: "AIR JORDAN 11 RETRO 'WIN LIKE '96'", cost:"360", image: "https://cdn.flightclub.com/750/TEMPLATE/802269/1.jpg" , description: "The historical significance of the Air Jordan 11 Retro 'Win Like 96' will be abundantly apparent to Chicago Bulls fans")
Item.create(name: "AIR JORDAN 1 RETRO HIGH OG 'UNIVERSITY BLUE'", cost:"380", image:"https://cdn.flightclub.com/750/TEMPLATE/172524/1.jpg" , description: "Paying tribute to Michael Jordan's college alma mater, the Air Jordan 1 Retro High OG 'University Blue' features a University of North Carolina look")
Item.create(name: "AIR JORDAN 1 RETRO HIGH OG 'BORDEAUX'", cost:"200", image:"https://cdn.flightclub.com/2200/TEMPLATE/275668/1.jpg" , description: "The Air Jordan 1 Retro High OG 'Bordeaux' emerges with a rich colorway. The shoe's leather upper appears with a white base, overlaid by Bordeaux leather throughout")
Item.create(name: "AIR JORDAN 3 RETRO 'RACER BLUE'", cost:"220", image:"https://cdn.flightclub.com/2200/TEMPLATE/248961/1.jpg", description: "Featuring 'Fire Red'-style color-blocking, the Air Jordan 3 Retro 'Racer Blue' released in July 2021")
Item.create(name: "AIR JORDAN 3 RETRO OG 'TRUE BLUE' 2016", cost:"330", image:"https://cdn.flightclub.com/2200/TEMPLATE/012588/1.jpg", description: "The 2016 edition of the Air Jordan 3 Retro OG ‘True Blue’ brings back one of the silhouette’s OG colorways from 1988.")
Item.create(name: "AIR JORDAN 3 RETRO 'WHITE CEMENT' 2011", cost:"535", image:"https://cdn.flightclub.com/2200/TEMPLATE/011304/1.jpg", description: "The 2011 reissue of the Air Jordan 3 Retro ‘White Cement’ brings back the OG colorway of the iconic silhouette that introduced elephant print, visible Air cushioning and the Jumpman logo to the Jordan franchise")
Item.create(name: "AIR JORDAN 12 RETRO 'TAXI' 2013", cost:"520", image:"https://cdn.flightclub.com/2200/TEMPLATE/011844/1.jpg", description: "The 2013 edition of the Air Jordan 12 Retro ‘Taxi’ brings back the iconic OG colorway worn by Michael Jordan during the 1996-97 NBA season")
Item.create(name: "AIR JORDAN 12 RETRO 'GYM RED'", cost:"350", image:"https://cdn.flightclub.com/2200/TEMPLATE/012457/1.jpg", description: "The Air Jordan 12 Retro 'Gym Red' emerges with a Chicago Bulls mix of hues. Built with tumbled leather, the shoe's upper appears in Gym Red, with a metallic finish on the tonal eyelets.")
Item.create(name: "AIR JORDAN 13 RETRO 'CHICAGO' 2017", cost:"300", image:"https://cdn.flightclub.com/750/TEMPLATE/800391/1.jpg", description: "The Air Jordan 13 Retro 'Chicago' 2017 brought the OG 'Chicago' colorway back to the Jordan 13 silhouette")
Item.create(name: "AIR JORDAN 11 RETRO 'BRED' 2019", cost: "475.00", image: "https://cdn.flightclub.com/2200/TEMPLATE/152814/1.jpg", description: "The shoe's upper is built with a mix of mesh and patent leather, all finished in black, save for the Varsity Red Jumpman and white 23")


# CartItem.create(cart_id: , item_id: , quantity: )
CartItem.create(cart_id: Cart.first.id, item_id: Item.first.id, quantity: 1)

# Review.create(user_id: , item_id: , comment: , rating: )
Review.create(user_id: User.first.id, item_id: Item.first.id, comment: "This is a comfortable shoe", rating: 9)


