const model = require('../models/users.model.js');

function getUsers(req,res){
	res.json(model)
}

module.exports = {
	getUsers,
}
