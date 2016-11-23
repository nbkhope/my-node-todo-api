const { MongoClient, ObjectID } = require('mongodb');

// No need to create a db in MongoDB; it just does it when you add records
MongoClient.connect('mongodb://localhost:27017/MyNodeTodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID('5833a03dc8599ffe907d3c26')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('58339f57c8599ffe907d3c22')
  }, { $set: { name: 'Baugh' }, $inc: { age: 2 } }, { returnOriginal: false })
    .then((result) => {
      console.log(result);
    });

  // Close connection with MongoDB
  db.close();
});
