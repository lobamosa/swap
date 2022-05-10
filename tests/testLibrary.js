var assert = require('assert');
const { expect } = require('chai');
const { password } = require('pg/lib/defaults');
const {User} = require('../models/');
const Auth = require('../services/auth');
const Library = require('../services/library');

describe('Library service', () => {
    it('should return the library of the user', async () => {
        const username = 'jdoe';
        const password = 'j';
        const email = "jdoe@gmail.com";
        const library = ['ff7', 'mgs5'];
        const service = new Library;
        const Auth_class = new Auth;
        const user = new User
        user.username = username;
        user.library = library;
        const library_from_user = await service.get_games_from_user(user);
        expect(library_from_user).to.be.an('array')
    })
}) 