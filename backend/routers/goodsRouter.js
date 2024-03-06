const express = require('express');
const { getGoods, getGoodsByShopId} = require("../controllers/goodsService");

const    goodsRouter = express.Router();



goodsRouter.get('/',  getGoods);
goodsRouter.get('/:id',  getGoodsByShopId);

module.exports = {goodsRouter}
