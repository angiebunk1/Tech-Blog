const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'skellington',
    email: 'jackandsally4ever@gmail.com',
    password: 'password123'
  },
  {
    username: 'pingu',
    email: 'nootnoot@yahoo.com',
    password: 'password123'
  },
  {
    username: 'cosmicangela',
    email: 'spawn@aol.com',
    password: 'password123'
  },
  {
    username: 'harrison',
    email: 'iheartringo@hotmail.com',
    password: 'password123'
  },
  {
    username: 'winifred',
    email: 'sandersonsisters@frontiernet.net',
    password: 'password123'
  },
  {
    username: 'pikachu',
    email: 'gottacatchemall@gmail.com',
    password: 'password123'
  },
  {
    username: 'phineas',
    email: 'perrytheplatypus@yahoo.com',
    password: 'password123'
  },
  {
    username: 'swiper',
    email: 'noswiping@aol.com',
    password: 'password123'
  },
  {
    username: 'godofmischief',
    email: 'loki@hotmail.com',
    password: 'password123'
  },
  {
    username: 'starlord',
    email: 'quill@frontiernet.net',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;