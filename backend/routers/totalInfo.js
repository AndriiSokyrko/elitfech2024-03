const express = require('express');
const {getTotalInfo} = require("../controllers/saveOrderService");
const {saveTotalInfo} = require("../controllers/saveOrderService");
const {getMenu} = require("../controllers/menuService");
const { setMenu } = require("../controllers/menuService.js");

const totalInfoRouter = express.Router();

totalInfoRouter.post('/',  saveTotalInfo);
totalInfoRouter.get('/getTotalInfo',  getTotalInfo);


module.exports = {
   totalInfoRouter
};
