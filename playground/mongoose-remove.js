const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo, User } = require('../server/models');

const id = '583601e6ebafc3052b1a25fc';

// Remove everything from the collection
// Todo.remove({})
//   .then((result) => {
//     console.log(result);
//   })
//   ;

// Finds one and removes that one
// Todo.findOneAndRemove({ _id: '5845ff8f94f5ea0d883303cf' })
//   .then(() => {
//
//   })
//   ;

// Finds one by id and removes it
Todo.findByIdAndRemove('5845ff8f94f5ea0d883303cf')
  .then((todo) => {
    // you get back the object that was removed
    console.log(todo);
  })
  ;
