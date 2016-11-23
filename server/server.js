const mongoose = require('mongoose');

// Configure mongoose to use JavaScript Promise
mongoose.Promise = global.Promise;
// Connect to the database
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(`${DB_URL}/MyNodeTodoApp`);

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    // use Number for Unix timestamp
    type: Number
  }
});
