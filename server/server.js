const express = require('express');
const bodyParser = require('body-parser');

// Sets up environment variables regarding the PORT and MONGODB_URI
require('./config/config.js');

const router = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // converts JSON string to JS object

// Place routes in an external file
router(app);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports.app = app;
