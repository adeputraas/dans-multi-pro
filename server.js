const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const routes = require('./app/routes/index');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ade Application Task" });
});

require("dotenv").config();

let key = routes;
for (key in routes) {
  app.use("/api", routes[key]);
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
