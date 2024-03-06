const { Goods } = require('../models/goods');
const Joi = require('joi');
const db = require("../models/goods");
const {Menu} = require("../models/Menu");

const  menu = [
    {id:"001",title: "shop"},
    {id:"002", title: "Shopping Cart"},
]

const setMenu = async (req, res) => {
    try {
        if(!Menu.find({}).length ){
            Menu.insertMany(menu).then(() => res.json({
                code: 'Ok'
            } ))
            return
        }

        return res.status(200).json(
            {
                "menu":
                menu
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
const getMenu = async (req, res) => {
    try {
        const menu = await Menu.find({})
        if(!menu.length ){
            return res.status(200).json(
                {
                    "message":
                        "No menu"
                }
            );
        }

        return res.status(200).json(
            {
                "menu":
                menu
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
module.exports = {
  setMenu,
    getMenu
};
