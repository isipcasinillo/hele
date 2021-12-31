const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find()
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => 
    {
      const profile = await User.create({username, email, password});
      const token = signToken(profile);
      return { token, profile };
    }
  },
  // Checks the user if email & password matches any in the database //
  login: async (parent, { email, password }) => {
    const profile = await User.findOne({ email });

    if (!profile) {
      throw new AuthenticationError('No profile with this email found!');
    }

    const correctPw = await User.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect password!');
    }

    const token = signToken(profile);
    return { token, profile };
  },
};

module.exports = resolvers;
