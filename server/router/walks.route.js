const WalksController = require('../controller/walks.controller');

const express = require('express');

walks = express.Router();

walks.get('/', WalksController.getAll);

walks.get('/:id', WalksController.getOne);

walks.route("/add").post(WalksController.createWalk);


module.exports = walks;