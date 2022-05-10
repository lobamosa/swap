const User = require('../models/').User
const binarySearch = require('./ds')
class Library {
    constructor()
    {
        
    }
    async get_library_from_user(user)
    {
        const library = user.library;
        return library; 
    }
    async get_whishlist_from_user(user)
    {
        const whishlist = user.whishlist;
        return whishlist; 
    }
    async retrieve_user_game(whishlist, game)
    {
        const game_wanted = binarySearch(whishlist, game);
        return game_wanted;
    }
}

module.exports = Library