const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, id_token, password }) {
    const payload = { email, username, id_token, password };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
