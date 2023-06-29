const express = require('express');
const path = require('path'); // required for setting paths
const app = express();

const PORT = 8001;
//Middlewares
app.set("view engine" , "ejs");
app.set("views", path.resolve("./views") )

app.listen(PORT, ()=> {
    console.log(`Server listening on port : ${PORT}`);
});