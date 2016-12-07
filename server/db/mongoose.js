const mongoose = require('mongoose');

// Configure mongoose to use JavaScript Promise
mongoose.Promise = global.Promise;
// Connect to the database
const DB_URL = process.env.MONGODB_URI;
mongoose.connect(DB_URL);

module.exports = {
  mongoose
};
