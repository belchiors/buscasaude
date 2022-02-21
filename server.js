const express = require('express');
const serverStatic = require('server-static');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.use('/', serverStatic(path.join(__dirname, '/dist')));

app.listen(port);

console.log(`Listening on port: ${port}`);

