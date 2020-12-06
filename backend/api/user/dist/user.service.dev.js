"use strict";

var dbService = require('../../services/db.service');

var ObjectId = require('mongodb').ObjectId;

module.exports = {
  query: query,
  getById: getById,
  getByEmail: getByEmail,
  remove: remove,
  update: update,
  add: add
};

function query() {
  var filterBy,
      criteria,
      collection,
      users,
      _args = arguments;
  return regeneratorRuntime.async(function query$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filterBy = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          criteria = _buildCriteria(filterBy);
          _context.next = 4;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 4:
          collection = _context.sent;
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(collection.find(criteria).toArray());

        case 8:
          users = _context.sent;
          users.forEach(function (user) {
            return delete user.password;
          });
          return _context.abrupt("return", users);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](5);
          console.log('ERROR: cannot find users');
          throw _context.t0;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 13]]);
}

function getById(userId) {
  var collection, user;
  return regeneratorRuntime.async(function getById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 2:
          collection = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(collection.findOne({
            "_id": ObjectId(userId)
          }));

        case 6:
          user = _context2.sent;
          delete user.password;
          user.givenReviews = user.givenReviews.map(function (review) {
            delete review.byUser;
            return review;
          });
          return _context2.abrupt("return", user);

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          console.log("ERROR: while finding user ".concat(userId));
          throw _context2.t0;

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 12]]);
}

function getByEmail(email) {
  var collection, user;
  return regeneratorRuntime.async(function getByEmail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 2:
          collection = _context3.sent;
          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(collection.findOne({
            email: email
          }));

        case 6:
          user = _context3.sent;
          return _context3.abrupt("return", user);

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.log("ERROR: while finding user ".concat(email));
          throw _context3.t0;

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 10]]);
}

function remove(userId) {
  var collection;
  return regeneratorRuntime.async(function remove$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 2:
          collection = _context4.sent;
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(collection.deleteOne({
            "_id": ObjectId(userId)
          }));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](3);
          console.log("ERROR: cannot remove user ".concat(userId));
          throw _context4.t0;

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 8]]);
}

function update(user) {
  var collection;
  return regeneratorRuntime.async(function update$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 2:
          collection = _context5.sent;
          user._id = ObjectId(user._id);
          _context5.prev = 4;
          _context5.next = 7;
          return regeneratorRuntime.awrap(collection.replaceOne({
            "_id": user._id
          }, {
            $set: user
          }));

        case 7:
          return _context5.abrupt("return", user);

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](4);
          console.log("ERROR: cannot update user ".concat(user._id));
          throw _context5.t0;

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[4, 10]]);
}

function add(user) {
  var collection;
  return regeneratorRuntime.async(function add$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(dbService.getCollection('user'));

        case 2:
          collection = _context6.sent;
          _context6.prev = 3;
          _context6.next = 6;
          return regeneratorRuntime.awrap(collection.insertOne(user));

        case 6:
          return _context6.abrupt("return", user);

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](3);
          console.log("ERROR: cannot insert user");
          throw _context6.t0;

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[3, 9]]);
}

function _buildCriteria(filterBy) {
  var criteria = {};

  if (filterBy.txt) {
    criteria.username = filterBy.txt;
  }

  if (filterBy.minBalance) {
    criteria.balance = {
      $gte: +filterBy.minBalance
    };
  }

  return criteria;
}