const routes = require('express').Router();

const { User } = require('./app/models');

User.create({
  name: 'Alan',
  email: 'alan@alan.com',
  password_hash: '123',
});

module.exports = routes;
