const { mongoose } = require('./db/mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true // get rid of whitespace on the sides
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    // use Number for Unix timestamp
    type: Number,
    default: null
  }
});

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  }
});

// Create new user
const newUser = new User({
  email: '      jack@mail.com      '
});

newUser.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);
});

// Create new todo
// const newTodo = new Todo({
//   //text: 'Clean the litter box'
//   text: '    ads1d  sa   asd   '
// });

// Save new todo to the DB
//  note: Mongoose automatically lowercases and pluralizes the db name
//        based on model name
// newTodo.save()
//   .then((doc) => {
//     console.log('Saved todo:', doc)
//   }, (error) => {
//     console.log('Unable to save todo', error);
//   });

// const anotherTodo = new Todo({
//   text: 'Walk the dog',
//   completed: true,
//   completedAt: 1479933477
// });
//
// anotherTodo.save()
//   .then((doc) => {
//     console.log('Saved todo.');
//     console.log(JSON.stringify(doc, undefined, 2));
//   }, (error) => {
//     console.log('Unable to save todo', error);
//   });
