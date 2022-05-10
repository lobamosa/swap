var assert = require('assert');
const { expect } = require('chai');
const { Sequelize, User } = require('../models/');
const Auth = require('../services/auth');
describe('Authentication module', async function () {
    it('should create an user', async function () {
      const Auth_class = new Auth
      const username = "johndoe";
      const email = "jdoe@gm.com";
      const password = "aPassToPassThePass";
      const library = ["mgs5", "ff7"];
      const user =  await Auth_class.create_user(username, email, password, library)
      expect(user.username).to.equal(username);
    });
});