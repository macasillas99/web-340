'use strict';

const http = require('http');
const server = require('../src/server');

function request(method, path) {
  const port = server.address().port;

  const options = {
    hostname: 'localhost',
    port,
    path,
    method,
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          body: JSON.parse(body),
        });
      });
    });

    req.on('error', reject);
    req.end();
  });
}

beforeAll((done) => {
  server.listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

describe('Fantasy game character creation routes', () => {
  test('POST /create-character creates a character from query parameters', async () => {
    const response = await request(
      'POST',
      '/create-character?class=Mage&gender=Female&funFact=Collects%20enchanted%20books'
    );

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Character created successfully.');
    expect(response.body.character).toEqual({
      class: 'Mage',
      gender: 'Female',
      funFact: 'Collects enchanted books',
    });
  });

  test('POST /confirm-character confirms the character creation', async () => {
    await request(
      'POST',
      '/create-character?class=Warrior&gender=Other&funFact=Has%20a%20pet%20dragon'
    );

    const response = await request('POST', '/confirm-character');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Character creation confirmed.');
    expect(response.body.confirmed).toBe(true);
    expect(response.body.character).toEqual({
      class: 'Warrior',
      gender: 'Other',
      funFact: 'Has a pet dragon',
    });
  });

  test('GET /view-character returns the same character that was created', async () => {
    await request(
      'POST',
      '/create-character?class=Rogue&gender=Male&funFact=Can%20pick%20any%20lock'
    );

    const response = await request('GET', '/view-character');

    expect(response.statusCode).toBe(200);
    expect(response.body.character).toEqual({
      class: 'Rogue',
      gender: 'Male',
      funFact: 'Can pick any lock',
    });
    expect(response.body.confirmed).toBe(false);
  });
});
