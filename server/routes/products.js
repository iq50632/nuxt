const mysql = require('mysql');

module.exports = function (app, connection) {
  app.get('/product', function (req, res) {
    connection.query('select * from products;', function (err, data) {
      err ? res.send(err) : res.json({ product: data });
    });
  });
};