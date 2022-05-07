const jwt = require('jsonwebtoken')
const fs = require('fs');

class Jwt {
    constructor(){}

    sign_in(username, password)
    {
        const private_key = fs.readFileSync('keys/jwtRS256.key', {encoding: 'utf-8'})
        const token = jwt.sign({username: username, password: password}, private_key, {algorithm: 'RS256'})
        return token
    }

    verify_token(token)
    {
        const public_key = fs.readFileSync('keys/jwtRS256.key.pub', {encoding: 'utf-8'})
        const payload = jwt.verify(token, public_key, {algorithms: 'RS256'});
        return payload;

    }
}

const jwt_test = new Jwt();
const token = jwt_test.sign_in('nicolas', 'test');

const payload = jwt_test.verify_token(token);

console.log(payload);