const express = require('express');

const usersController = require('../controllers/users.controller.js');
const usersRouter = express.Router();
usersRouter.use(express.urlencoded({extended : true}));

usersRouter.get("/", usersController.getUsers);
usersRouter.post("/post",usersController.postNewUser);

module.exports = usersRouter;
