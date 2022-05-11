var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const Auth = require('../services/auth');
const Jwt = require('../services/jwt');
const { AccessDeniedError } = require('sequelize/types');
const user = require('../models/user');
const cookieParser = require('cookie-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/signup', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const library = req.body.library;
  const whishlist = req.body.whishlist;

  const authentication = new Auth;
  const user = authentication.create_user(username, email, password, library, whishlist)
  try {
    res.send({message: "user created"});
  }
  catch(error)
  {
    res.send({error: error});
  }
})

router.get('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password
  const authentication = new Auth;
  const is_authenticate = authentication.authenticate(email, password)
  if(is_authenticate)
  {
    const jwt = new Jwt;
    const access_token = jwt.get_access_token(email, password);
    res.send({credentials: access_token})
  }
  else
    throw new AccessDeniedError();
})

module.exports = router;
