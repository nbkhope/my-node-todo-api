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
};
