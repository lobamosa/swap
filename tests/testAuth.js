const { expect } = require('chai');
const { Sequelize, User } = require('../models/');
const Auth = require('../services/auth');
const bcrypt = require("bcryptjs");
describe('Authentication module', async function () { 
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
    it("expect to authenticate the User", async () => {
      const Auth_class = new Auth
      const user =  new User;
      user.username = "johndoe";
      user.email = "jdoe@gm.com";
      user.password = "aPassToPassThePass";
      user.library = ["mgs5", "ff7"];
      const email = "jdoe@gm.com";
      const password = "aPassToPassThePass"
      const authentication = await Auth_class.authenticate(email, password)
      expect(authentication).to.be.true
    })
});