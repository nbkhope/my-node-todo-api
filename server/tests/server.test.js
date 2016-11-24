const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');

const { Todo } = require('../models/todo');

beforeEach((done) => {
  // Make sure the DB is clean before each test
  Todo.remove({}).then(() => {
    done();
  });
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'Walk the dog';

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
        Todo.find()
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
});

describe ('GET /todos', () => {

});
