const express = require('express');
const {getMenu} = require("../controllers/menuService");
const { setMenu } = require("../controllers/menuService.js");

const menuRouter = express.Router();

menuRouter.post('/',  setMenu);
menuRouter.get('/getMenu',  getMenu);


module.exports = {
   menuRouter
};
