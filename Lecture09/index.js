//index.js
//Description: Node.js HTML client
//require: npm install express ejs axios body-parser

const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();

//Base URL for the API
//const base_url = "https://api.example.com";
const base_url ="http://node41091-noderest.proen.app.ruk-com.cloud";

//Set the template engine
app.set("view", path.join(__dirname, "/public/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));