const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'drax',
    email: 'ihatethanos@gmail.com',
    password: 'password123'
  },
  {
    username: 'rocket',
    email: 'iheartgroot@yahoo.com',
    password: 'password123'
  },
  {
    username: 'groot',
    email: 'iamgroot@aol.com',
    password: 'password123'
  },
  {
    username: 'gamora',
    email: 'vengeance@hotmail.com',
    password: 'password123'
  },
  {
    username: 'nebula',
    email: 'imbluedabadedabadi@frontiernet.net',
    password: 'password123'
  },
  {
    username: 'quill',
    email: 'starlord@gmail.com',
    password: 'password123'
  },
  {
    username: 'nandu',
    email: 'ravengercode@yahoo.com',
    password: 'password123'
  },
  {
    username: 'taserface',
    email: 'dumbname@aol.com',
    password: 'password123'
  },
  {
    username: 'thecollector',
    email: 'gottacatchemall@hotmail.com',
    password: 'password123'
  },
  {
    username: 'ego',
    email: 'wholefrickinplanet@frontiernet.net',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;