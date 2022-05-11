const jwt = require('jsonwebtoken')
const fs = require('fs');

class Jwt {
    constructor(){}

    get_access_token(email, password)
    {
        const private_key = fs.readFileSync('keys/jwtRS256.key', {encoding: 'utf-8'})
        const token = jwt.sign({email: email, password: password}, private_key, {algorithm: 'RS256'})
        return token
    }

    verify_token(token)
    {
        const public_key = fs.readFileSync('keys/jwtRS256.key.pub', {encoding: 'utf-8'})
        const payload = jwt.verify(token, public_key, {algorithms: 'RS256'});
        return payload;

    }
}

module.exports = Jwt