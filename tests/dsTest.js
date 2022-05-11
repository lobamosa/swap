const { expect } = require('chai');
const binarySearch = require('../services/ds');

describe('data structure', () => {
    it('should retrieve the value with a binary search', () => {
        const library = ['ff7', 'metal gear solid 5', 'metal gear solid 3', 'paper mario', 'zelda ocarina of time'];
        const target = 'paper mario'
        const retrieved_game =  binarySearch(library, target);
        expect(retrieved_game).to.equal(target);
    })
})