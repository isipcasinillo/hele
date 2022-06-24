const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle } = require('../models');
const { signToken } = require('../utils/auth');
const moment = require('moment')
const resolvers = {
  Query: {
    getUser: async () => {
      return User.findOne({ username }).populate('bottles');
    },
    getSingleBottle: async (parent, { _id }) => {
      return await Bottle.findById({ _id: _id });
    },
    getBottleByDate: async (parent, { date, bottleAuthor }) => {
      return await Bottle.find({
        bottleAuthor: bottleAuthor,
        date: date
      }).sort({ createdAt: -1 });
    }
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Checks the user if email & password matches any in the database //

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addBottle: async (parent, { bottleAuthor, bottleText, bottleTime, date }) => {
      return Bottle.create({
        bottleAuthor,
        bottleText,
        bottleTime,
        date
      });
    },
    removeBottle: async (parent, { _id }) => {
      return await Bottle.findByIdAndDelete(_id);
    },
    updateBottle: async (parent, { _id, bottleText, bottleTime }) => {
      return Bottle.findByIdAndUpdate(_id, {
        $set: {
          bottleText: bottleText,
          bottleTime: bottleTime,
        },
      });
    },
  },
};

module.exports = resolvers;
