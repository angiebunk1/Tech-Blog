const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 3,
    post_id: 10
  },
    {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 7,
    post_id: 5
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 7,
    post_id: 4
  },
    {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 10
  },
    {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 9
  },
    {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 2,
    post_id: 2
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 8,
    post_id: 10
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 5,
    post_id: 3
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 10,
    post_id: 1
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 5,
    post_id: 3
  },
    {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 10,
    post_id: 8
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 8,
    post_id: 9
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 9,
    post_id: 10
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 5,
    post_id: 4
  },
   {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'oianoigoertgiegnioaer',
    user_id: 10,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;