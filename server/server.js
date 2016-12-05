const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// Middleware
app.use(bodyParser.json()); // converts JSON string to JS object

// Place routes in an external file
router(app);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports.app = app;
