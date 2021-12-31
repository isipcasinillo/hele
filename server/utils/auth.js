const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, id }) {
    const payload = { email, username, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
