const sequelize = require("../sequelize");
const User = require('../models/').User
class Auth
{
    constructor()
    {}
    authenticate()
    {

    }
    async create_user(username, email, password, library)
    {   
        const user = await User.create({username: username, email: email, password: password, library: library})
        return user
    }
}
module.exports = Auth

