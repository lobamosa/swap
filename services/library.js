const User = require('../models/').User

class Library {
    constructor()
    {
        
    }
    async get_games_from_user(user)
    {
        const library = user.library;
        return library; 
    }
}

module.exports = Library