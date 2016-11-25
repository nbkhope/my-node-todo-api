const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = '583601e6ebafc3052b1a25fc';

// if (!ObjectID.isValid(id)) {
//   console.log('The given id is not valid.');
//   return;
// }

// Mongoose actually takes id and converts to ObjectID
// (so you dont have to say new ObjectID('...'))

// // gives empty array if none found
// Todo.find({ _id: id })
//   .then((todos) => {
//     console.log('Todos', todos);
//   });
//
// // gives out null if none found
// Todo.findOne({ _id: id })
//   .then((todo) => {
//     console.log('Todo', todo);
//   });

// // gives out null if none found
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Todo with given id not found.');
//     }
//     console.log('Todo', todo);
//   }).catch((e) => console.log(e));

// issues:
//   if not found, you get null
// errors you might get:
//   - ID is invalid

User.findById(id)
  .then((user) => {
    if (!user) { // you get null if none was found
      console.log('User not found');
      return;
    }

    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch((error) => {
    console.log(error);
  });
