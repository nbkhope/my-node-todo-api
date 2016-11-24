const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');

const { Todo } = require('../models/todo');

// dummy todos
const todos = [
  {
    text: 'First test todo'
  },
  {
    text: 'Second test todo'
  }
];

beforeEach((done) => {
  // Make sure the DB is clean before each test
  Todo.remove({}).then(() => {
    // returns a promise
    return Todo.insertMany(todos);
  })
    .then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'Walk the dog 123456 Yes';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200) // expect status 200 OK
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
          // return;
        }

        // Make sure todo was saved to the DB
        Todo.find({ text })
          .then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch((e) => {
            done(e);
          });
      });
  });

  it('should not create a todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        // Make sure no todo was saved to the DB
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe ('GET /todos', () => {
  it('should retrieve all the todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        // expect(res.body.todos).toBeA('array');
        expect(res.body.todos.length).toBe(2);
        // expect(res.body.todos).toEqual([]);
        done();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }


      });
  });
});
