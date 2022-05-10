const sequelize = require("../sequelize");
const User = require('../models/').User
const bcrypt = require('bcrypt');
class Auth
{
    constructor()
    {}
    authenticate()
    {

    }
    async create_user(user)
    {   
        const saltRounds = 10;
        const hash = await this.hash_password(user.password, saltRounds);
        const user_instance = await User.create({username: user.username, email: user.email, password: hash, library: user.library})
        return user_instance;
    }
    async hash_password(password, saltRounds)
    {
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);
        return hash;
    }
}
module.exports = Auth
