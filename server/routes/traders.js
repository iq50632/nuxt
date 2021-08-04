const mysql = require('mysql');

module.exports = function (app, connection) {
  app.get('/trader', function (req, res) {
    connection.query('select * from logins;', function (err, data) {
      err ? res.send(err) : res.json({ product: data });
    });
  });
};