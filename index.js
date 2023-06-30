const path = require("path"); // required for setting paths
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

const PORT = 8001;

mongoose
  .connect("mongodb://127.0.0.1:27017/cryptochain")
  .then((e) => console.log("MongoDb Connected"));
//Middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {
  return res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
