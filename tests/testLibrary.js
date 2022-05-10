var assert = require('assert');
const { expect } = require('chai');
const { password } = require('pg/lib/defaults');
const {User} = require('../models/');
const Library = require('../services/library');

describe('Library service', () => {
    it('should return the library of the user', async () => {
        const username = 'jdoe';
        const password = 'j';
        const email = "jdoe@gmail.com";
        const library = ['ff7', 'mgs5'];
        const service = new Library;
        const library_from_user = await service.get_games_from_user('jdoe');
        for(let i = 0; i < library_from_user.length; i++)
        {
            console.log(library_from_user[i]);
        }
    })
}) 