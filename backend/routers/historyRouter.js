const express = require('express');
const {saveOrder, getOrderById} = require("../controllers/historyService");

const    historyRouter = express.Router();



historyRouter.post('/save',  saveOrder);
historyRouter.get('/:id',  getOrderById);

module.exports = {historyRouter}