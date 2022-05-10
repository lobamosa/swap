const User = require('../models/').User

class Library {
    constructor()
    {
        
    }
    async get_games_from_user(username)
    {
        const user = await User.findOne({where: {username: username}})
        const library = user.library;
        return library; 
    }
}

module.exports = Library