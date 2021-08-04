const mysql = require('mysql');

module.exports = function (app, connection) {
  app.get('/user', function (req, res) {
    connection.query('select * from users;', function (err, data) {
      err ? res.send(err) : res.json({ mydata: data });
    });
  });
};