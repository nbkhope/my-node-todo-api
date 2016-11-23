const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');

const { Todo } = require('./models/todo');
const { User }  = require('./models/user');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
