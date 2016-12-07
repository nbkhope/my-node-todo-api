const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose');

const { Todo, User } = require('./models');

module.exports = (app) => {
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
        res.status(400).send(error);
      });
  });

  app.get('/todos', (req, res) => {
    Todo.find()
      .then((docs) => {
        // send back array inside object for more flexibility
        res.send({ todos: docs });
      }, (e) => {
        res.status(400).send(e);
      });
  });

  app.get('/todos/:id', (req, res) => {
    // req.params
    const { id } = req.params;

    if (!ObjectID.isValid(id)) {
      res.status(404).send({ message: 'Invalid ID' });
      return;
    }

    Todo.findById(id)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({ message: 'Todo not found' });
        }

        res.send({ todo });
      })
      .catch((error) => {
        res.status(400).send();
      });
  });

  app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    if (!ObjectID.isValid(id)) {
      res.status(404).send();
      return;
    }

    Todo.findByIdAndRemove(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({ message: 'Todo not found' });
      }

      res.send({ todo });
    })
    .catch(error => {
      res.status(400).send();
    });
  });

  app.patch('/todos/:id', (req, res) => {
    const { id } = req.params;
    // Use lodash to easily filter the properties you need
    // (and effectively reject all other params)
    const body = _.pick(req.body, ['text', 'completed']);

    // Check if id is valid
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      // getTime() returns a JS timestamp (in milliseconds!!)
      body.completedAt = new Date().getTime();
    }
    else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send();
        }

        res.send({ todo });
      })
      .catch((error) => {
        res.status(400).send();
      });
  });
};
