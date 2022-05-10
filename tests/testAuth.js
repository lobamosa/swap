var assert = require('assert');
const bcrypt = require('bcrypt');
const { expect } = require('chai');
const { Sequelize, User } = require('../models/');
var SequelizeMock = require('sequelize-mock');

const Auth = require('../services/auth');
describe('Authentication module', async function () {
    it('should create an user', async function () {
      const Auth_class = new Auth
      const user =  new User;
      user.username = "johndoe";
      user.email = "jdoe@gm.com";
      user.password = "aPassToPassThePass";
      user.library = ["mgs5", "ff7"];
      const user_unstance =  await Auth_class.create_user(user)
      expect(user_instance.username).to.equal(username);
    });
    it('expect password to be encrypted',async () => {
      const Auth_class = new Auth
      const username = "johndo";
      const email = "je@gm.com";
      const password = "aPassToPassThePass";
      const library = ["mgs5", "ff7"];
      const hash =  await Auth_class.hash_password(password, 10)
      const password_to_check = bcrypt.compareSync(password, hash)
      expect(password_to_check).to.be.true
    })
});