const express = require('express');
const {getShops} = require("../controllers/shopsService");

const shopsRouter = express.Router();



shopsRouter.get('/',  getShops);


module.exports = {
   shopsRouter
};
