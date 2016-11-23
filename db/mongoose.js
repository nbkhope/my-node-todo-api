const mongoose = require('mongoose');

// Configure mongoose to use JavaScript Promise
mongoose.Promise = global.Promise;
// Connect to the database
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(`${DB_URL}/MyNodeTodoApp`);

module.exports = {
  mongoose
};
