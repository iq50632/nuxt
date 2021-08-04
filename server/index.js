// use express method
const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3001;
export const server = 'http://localhost:3000';
const app = express();

// Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')

// // Import API Routes
// app.use(users)
// app.use(test)
app.get('/hello', (req, res) => {
  res.json({
    title: 'Hello World!'
  })
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'laravel',
  port:'3306'
});

connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

require('./routes/html-routes')(app, connection);
require('./routes/products')(app, connection);
require('./routes/traders')(app, connection);

app.listen(PORT, () => {
  console.log('app running on port %s', PORT);
});

module.exports = app;

module.exports = {
  path: 'api',
  handler: app
}