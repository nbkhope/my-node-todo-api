const { MongoClient, ObjectID } = require('mongodb');

// No need to create a db in MongoDB; it just does it when you add records
MongoClient.connect('mongodb://localhost:27017/MyNodeTodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB.');
  }

  console.log('Connected to MongoDB server.');

  // toArray returns a promise
  db.collection('todos').find().toArray()
    .then((docs) => {
      console.log('All todos:');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  // Close connection with MongoDB
  db.close();
});
