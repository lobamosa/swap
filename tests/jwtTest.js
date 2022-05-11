const bcrypt = require('bcryptjs');
const { expect, assert } = require('chai');
const { Sequelize, User } = require('../models');
const Auth = require('../services/auth');
const Jwt = require('../services/jwt');

describe('json web token', async function () { 
    it('expect to get access token',async () => {
      const jwt = new Jwt;
      const user = new User;
      user.email = "jdoe@gm.com";
      const password = "test";
      const authentication = new Auth;
      const hash = authentication.hash_password(password, 10);
      user.password = hash;
      const access_token = jwt.get_access_token(User.email, hash);
      assert.isString(access_token);      
    })
});