const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true // get rid of whitespace on the sides
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    // use Number for Unix timestamp
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
}
