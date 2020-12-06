"use strict";

var express = require('express');

var _require = require('../../middlewares/requireAuth.middleware'),
    requireAuth = _require.requireAuth,
    requireAdmin = _require.requireAdmin;

var _require2 = require('./user.controller'),
    getUser = _require2.getUser,
    getUsers = _require2.getUsers,
    deleteUser = _require2.deleteUser,
    updateUser = _require2.updateUser;

var router = express.Router();
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', requireAuth, updateUser);
router["delete"]('/:id', requireAuth, requireAdmin, deleteUser);
module.exports = router;