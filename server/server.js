const mongoose = require('mongoose');

// Configure mongoose to use JavaScript Promise
mongoose.Promise = global.Promise;
// Connect to the database
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(`${DB_URL}/MyNodeTodoApp`);

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

// Create new todo
const newTodo = new Todo({
  //text: 'Clean the litter box'
  text: '    ads1d  sa   asd   '
});

// Save new todo to the DB
//  note: Mongoose automatically lowercases and pluralizes the db name
//        based on model name
newTodo.save()
  .then((doc) => {
    console.log('Saved todo:', doc)
  }, (error) => {
    console.log('Unable to save todo', error);
  });

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
