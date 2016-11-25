const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

const id = '5837553f543a4f05d3c38d38';

// Mongoose actually takes id and converts to ObjectID
// (so you dont have to say new ObjectID('...'))
Todo.find({ _id: id })
  .then((todos) => {
    console.log('Todos', todos);
  });

Todo.findOne({ _id: id })
  .then((todo) => {
    console.log('Todo', todo);
  });

Todo.findById(id)
  .then((todo) => {
    console.log('Todo', todo);
  });
