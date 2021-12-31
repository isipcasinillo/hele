const { User } = require('../models')

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find()
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => 
    {
      return await User.create({username, email, password});
    }
  },
};

module.exports = resolvers;
