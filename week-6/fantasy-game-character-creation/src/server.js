'use strict';

const http = require('http');
const { URL } = require('url');

let createdCharacter = null;
let characterConfirmed = false;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function createCharacter(query) {
  return {
    class: query.get('class'),
    gender: query.get('gender'),
    funFact: query.get('funFact'),
  };
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const route = requestUrl.pathname;

  if (req.method === 'POST' && route === '/create-character') {
    createdCharacter = createCharacter(requestUrl.searchParams);
    characterConfirmed = false;

    return sendJson(res, 201, {
      message: 'Character created successfully.',
      character: createdCharacter,
    });
  }

  if (req.method === 'POST' && route === '/confirm-character') {
    if (!createdCharacter) {
      return sendJson(res, 404, {
        message: 'No character has been created yet.',
      });
    }

    characterConfirmed = true;

    return sendJson(res, 200, {
      message: 'Character creation confirmed.',
      confirmed: characterConfirmed,
      character: createdCharacter,
    });
  }

  if (req.method === 'GET' && route === '/view-character') {
    if (!createdCharacter) {
      return sendJson(res, 404, {
        message: 'No character has been created yet.',
      });
    }

    return sendJson(res, 200, {
      character: createdCharacter,
      confirmed: characterConfirmed,
    });
  }

  return sendJson(res, 404, {
    message: 'Route not found.',
  });
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

module.exports = server;
