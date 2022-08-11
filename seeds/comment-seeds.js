const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nice park.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Are there bathrooms at this park?',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Thanks for posting! Love this place.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Oh, I want to go there!',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Wish I lived closer.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Does it have play equipment for little kids?',
    user_id: 1,
    post_id: 12
  },
  {
    comment_text: 'Does anyone know when the concerts are happening at this park this summer?',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Favorite picnic spot.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Had a hard time finding it.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'How close is this park to the public library?',
    user_id: 6,
    post_id: 10
  },
  {
    comment_text: 'We love to sled here in the winter.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Had a bad experience here.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:'Last time I was here there was a lot of graffiti. Has it been cleaned up yet?',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Went here on vacation.  Highlight of the trip.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Is it near a swimming pool?',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Kids like to ride their bikes there.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'I got married here!!!! Love it so much!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Watchout for the lady who walks her dog here every morning at 9am.  Not very nice.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text: 'Remember to pack sunscreen!',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text: 'What hours is it open?',
    user_id: 9,
    post_id: 12
  },
  {
    comment_text: 'My kids always have thier birthday parties here.  We love it.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Too crowded!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Does it have nice benches to sit on?',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'City does a nice job keeping this park clean.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'How big is the picnic shelter?',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Stop feeding the wildlife!!!!!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'There was someone handing out pamphlets last time.  I left before I could find out what it was about.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Pretty good but not my favorite',
    user_id: 4,
    post_id: 15
  },
  {
    comment_text: 'Does the bus come near here?',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'Seagulls are nasty. Watch out.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sweet spot for a date night.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'This is everything I ever needed in a park!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Love the plays put on here in the summer.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Warning: park will be closed this weekend for maintenance.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Kids could play here all day every day.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Perfect for my 7 year old and 9 year old.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Have they fixed the slide yet?',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Some creepy guy usually hanging out on the bench. Has anyone reported him yet?',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Bring snacks.  You will be here a while.',
    user_id: 8,
    post_id: 9
  },
  {
    comment_text: 'Always some fun surprises.',
    user_id: 9,
    post_id: 10
  },
  {
    comment_text: 'Adding this to our list of destinations.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Brought the grandkids here last weekend.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'How often does trash get collected? Seems like the cans are always full.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Took a break from our long road trip here.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'Bring your whole family!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Great place to meet up with a friend to chat.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'I like to go here on my lunch break.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'New play equipment as of last year!  Super fun!',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Gross.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Who do I contact to reserve the picnic shelter?',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;