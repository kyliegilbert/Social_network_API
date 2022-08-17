const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//const dateFormat = require('../utils/dateFormat');
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      require: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
});


// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
