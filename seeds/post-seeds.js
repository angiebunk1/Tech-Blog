const { Post } = require('../models');

const postdata = [
  {
    post_title: 'How to do javascript',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 10
  },
  {
    post_title: 'How to do python',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 1
  },
  {
    post_title: 'How to do CSS',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 2
  },
  {
    post_title: 'How to do handlebars',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 3
  },
  {
    post_title: 'How to do SQL',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 4
  },
  {
    post_title: 'How to do Insomnia',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 5
  },
  {
    post_title: 'How to do heroku',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 6
  },
  {
    post_title: 'How to do github',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 7
  },
  {
    post_title: 'How to do OOP',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 8
  },
  {
    post_title: 'How to do express',
    post_content: 'aoisngoiernogwenriqwhroithqouertnqinrwqerugnqouernguqenrgoqegnqouetngo',
    user_id: 9
  }
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
