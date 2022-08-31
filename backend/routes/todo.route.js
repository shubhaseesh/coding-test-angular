const express = require('express');
const app = express();

const todoRoute = express.Router();

// Todo model
let Todo = require('../model/todo');

// Add Todo
todoRoute.route('/create').post((req, res, next) => {
	Todo.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});
// Get all todos
todoRoute.route('/').get((req, res) => {
	Todo.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

module.exports = todoRoute;
