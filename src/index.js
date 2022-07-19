const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

let httpConfig = require("./config").HTTP;

const db = require("./db");
db.sequelize.sync();

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("PORT", httpConfig.port);

const Router = require("./routes");
Router({ app, models: db.models });

app.listen(app.get("PORT"), () => {
	console.log(`Server listening on PORT ${app.get("PORT")}`);
});

app.use(function (errorUseMiddleware, req, res, next) {
	console.log("lalala");
	res.status(500).json(errorUseMiddleware);
});
