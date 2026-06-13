const express = require('express');

const HomePage = require("../controllers/homePageController");

const HomePageRouter = express.Router();

HomePageRouter.get('/',HomePage);

module.exports=HomePageRouter;