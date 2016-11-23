const { MongoClient, ObjectID } = require('mongodb');

// No need to create a db in MongoDB; it just does it when you add records
MongoClient.connect('mongodb://localhost:27017/MyNodeTodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB.');
  }

  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('todos').deleteMany({ text: 'Wash the dishes' })
  //   .then((result) => {
  //     console.log(result);
  //   });


  // deleteOne
  // db.collection('todos').deleteOne({ text: 'Walk the dog' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  // db.collection('todos').findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // Close connection with MongoDB
  db.close();
});
