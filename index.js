const path = require('path'); // required for setting paths
const express = require('express');
const app = express();

const userRoute = require('./routes/user');

const PORT = 8001;
//Middlewares
app.set("view engine" , "ejs");
app.set("views", path.resolve("./views") )

app.get("/", (req,res) => {
    res.render("home");
});

app.use('/user' , userRoute);

app.listen(PORT, ()=> {
    console.log(`Server listening on port : ${PORT}`);
});