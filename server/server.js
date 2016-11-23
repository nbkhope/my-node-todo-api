const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('../db/mongoose');

const { Todo } = require('../models/todo');
const { User }  = require('../models/user');

const app = express();

const port = 3000;

// Middleware
app.use(bodyParser.json()); // converts JSON string to JS object

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save()
    .then((doc) => {
      // send back new todo
      res.send(doc);
    }, (error) => {
      // 400 Bad Request
      res.status(400).send({
        message: 'Unable to save todo',
        error
      });
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
