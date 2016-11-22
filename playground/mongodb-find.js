const { MongoClient, ObjectID } = require('mongodb');

// No need to create a db in MongoDB; it just does it when you add records
MongoClient.connect('mongodb://localhost:27017/MyNodeTodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB.');
  }

  console.log('Connected to MongoDB server.');

  // toArray returns a promise
  //   * you can add { completed: true/false } to find() to filter results
  //   ** to search by _id,
  //      have to use .find({ _id: new ObjectID('sasdasddsadsdasdasas')} )
  // db.collection('todos').find().toArray()
  //   .then((docs) => {
  //     console.log('All todos:');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  // Counting
  //   (version with promise)
  // db.collection('todos').find().count()
  //   .then((count) => {
  //     console.log('Total number of todos:', count);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db.collection('users').find({ name: 'Andrew' }).toArray()
    .then((docs) => {
      console.log('All people with the name \'Andrew\':');
      console.log(JSON.stringify(docs, null, 2));
    }, (err) => {
      console.log('Unable to fetch users with name Andrew');
    });


  // Close connection with MongoDB
  db.close();
});
