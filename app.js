const express = require('express')

//controllers

// Routers
const usersRouter = require('./routes/users.router')

const app = express()


// MiddleWares
app.use(express.static('public'))
app.use(express.json())
app.use('/users',usersRouter);

app.get("/", (req,res) => {
	res.sendFile(__dirname+"/views/index.html")
});


app.listen(3000,() =>{
	console.log("running on http://localhost/3000");
});
