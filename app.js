const express = require('express')

//controllers
const userController = require('./controllers/users.controller.js')


const app = express()


// MiddleWares
app.use(express.static('public'))
app.use(express.json())

app.get("/", (req,res) => {
	res.sendFile(__dirname+"/views/index.html")
});

app.get("/users",userController.getUsers)


app.listen(3000,() =>{
	console.log("running on http://localhost/3000");
});
