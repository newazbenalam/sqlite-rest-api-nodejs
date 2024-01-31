const express = require("express");
const sequelize = require('./app/models/db');

require('dotenv').config()

const app = express();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const userRoutes = require("./app/routes/routes");
app.use(userRoutes);


app.get('/', (req, res) => {
    res.send("<h1>Server Access Okay</h1>");
})

app.use((req, res, next) => {
    res.send("<h1>Page Not Found</h1>");
})

// Start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
});