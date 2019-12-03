/// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(colmn, values, cb) {
    orm.insertOne("burgers", colmn, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(colValObj, condition, cb) {
    orm.updateOne("burgers", colValObj, condition, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;