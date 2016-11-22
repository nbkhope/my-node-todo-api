const MongoClient = require('mongodb').MongoClient;

// No need to create a db in MongoDB; it just does it when you add records
MongoClient.connect('mongodb://localhost:27017/MyNodeTodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB.');
  }

  console.log('Connected to MongoDB server.');

  // collection is like a table
  // db.collection('todos').insertOne({
  //   text: 'Wash the dishes',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   // .ops property has info about the record inserted
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  // db.collection('users').insertOne({
  //   name: 'Marty Heyyo',
  //   age: 36,
  //   location: 'San Francisco, CA'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert new user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  // Close connection with MongoDB
  db.close();
});
