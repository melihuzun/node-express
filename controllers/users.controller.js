const model = require('../models/users.model.js');

function getUsers(req,res){
	res.json(model)
}

function postNewUser(req,res){
	newUser = req.body;
	console.log(newUser);
	model.push(newUser);
	res.json(newUser);
}

module.exports = {
	getUsers,
	postNewUser,
}
