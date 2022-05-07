const jwt = require('jsonwebtoken')
const fs = require('fs');

class Jwt {
    constructor(){}

    sign_in(username, password)
    {
        const private_key = fs.readFileSync('keys/jwtRS256.key', {encoding: 'utf-8'})
        console.log(private_key)
        const token = jwt.sign({username: username, password: password}, private_key, {algorithm: 'RS256'})
        return token
    }
}

const jwt_test = new Jwt();
jwt_test.sign_in('nicolas', 'test');