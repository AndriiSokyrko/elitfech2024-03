const { Goods } = require('../models/goods');
const Joi = require('joi');
const db = require("../models/goods");



const getGoodsByShopId = async (req, res) =>{
    try {
        const goods = await Goods.find({idShop: req.params.id})

        if(!goods.length ){
            return res.status(200).json(
                {
                    "message":
                        "No goods"
                }
            );
        }

        return res.status(200).json(
            {
                "goods":
                goods
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
const getGoods = async (req, res) => {
    try {
        const items = await Goods.find()
        if(!items.length ){
            return res.status(200).json(
                {
                    "message":
                        "No items"
                }
            );
        }

        return res.status(200).json(
            {
                "goods":
                items
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}



module.exports = {
    getGoods,
    getGoodsByShopId
};
