const { Post } = require('../models');

const postdata = [
  {
    park_name: 'Halloween Hollow',
    location: '123 Pumpkin St',
    review: 'Super spooky and fun for all ghosts and ghouls',
    user_id: 10
  },
  {
    park_name: 'Strawberry Fields',
    location: '566 Abbey Road',
    review: 'Nothing is real',
    user_id: 5
  },
  {
    park_name: 'Igloo Snow Fort',
    location: '1 North Pole St',
    review: '5 out of 5 noots.  Noot noot noot noot noot.',
    user_id: 6
  },
  {
    park_name: 'Pewter City Central Park',
    location: '477 Ash St',
    review: 'Great place to catch a Snorlax',
    user_id: 3
  },
  {
    park_name: 'Forest River Park',
    location: '32 Clifton Ave',
    review: 'Riverfront park with beaches, picnic areas, and a playground, as well as a living history museum',
    user_id: 8
  },
  {
    park_name: 'Valhalla Valley',
    location: '789 Asgard Ave',
    review: 'Beautiful setting.  Can get a bit rowdy at times.',
    user_id: 8
  },
  {
    park_name: 'Danville Public Park',
    location: '45 Doofenshmirtz Way',
    review: 'Best place to play in the Tri-State Area!',
    user_id: 6
  },
  {
    park_name: 'Carondelet Park',
    location: '3900 Holly Hills Blvd',
    review: 'Lovely area with fishing ponds',
    user_id: 4
  },
  {
    park_name: 'Willow Creek Park',
    location: '8000 E Phillips Cir',
    review: 'Playground is awesome! Also lots of great walking trails, picnic facilities with grills, and athletic fields.',
    user_id: 2
  },
  {
    park_name: 'Lodestone Park',
    location: 'Between Hwy 85 and Walmart',
    review: 'Kids love the super long slides, but careful, they are metal so too hot to use in the summer',
    user_id: 1
  },
  {
    park_name: 'Tualatin Community Park',
    location: '8515 SW Tualatin Rd',
    review: 'Picnic area is really great and there is also a skatepark which my 14 year old enjoyed.',
    user_id: 9
  },
  {
    park_name: 'Hutcheson Park',
    location: '5400 Lockwood Dr',
    review: 'Brought the kids to the playground in the morning, and came back in the evening for a quick game of tennis',
    user_id: 9
  },
  {
    park_name: 'Morton Park',
    location: '5724 41st St',
    review: 'Love the splash pad on the hot summer days!',
    user_id: 7
  },
  {
    park_name: 'Robinwood Park',
    location: '640 Robinwood Dr',
    review: 'Play equipment is great, but our favorite thing to do in this park is go on nature walks through the woods.',
    user_id: 3
  },
  {
    park_name: 'Parc Jarry',
    location: '205 Rue Gary-Carter',
    review: 'This park is huge!!! Love the gardens. We often bring the dog along to play at the dog park area.',
    user_id: 5
  },
  {
    park_name: 'La Mexicana Park',
    location: '505 Luis Barragan Ave.',
    review: 'Beautiful landscaping. On-site food options make it a worthwhile lunch destination.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
