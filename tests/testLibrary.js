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
        const user = new User
        user.username = username;
        user.library = library;
        const library_from_user = await service.get_library_from_user(user);
        expect(library_from_user).to.be.an('array')
    })
    it('should retrieve the game wanted in the  library', async () => {
        const service = new Library;

        const username = 'jdoe';
        const library = ["a game of life", "ravenParty",'ff7', 'mgs5', 'ff14', 'test'];
        const user = new User
        user.username = username;
        user.library = library;
        const game_wanted = 'ff7';
        const test_game_wanted = await service.retrieve_user_game(library, game_wanted);
        expect(test_game_wanted).to.be.equal('ff7');
    })
}) 