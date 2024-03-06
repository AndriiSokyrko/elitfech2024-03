const Joi = require('joi');
const { Histories} = require("../models/History");

const getOrderById = async (req,res) => {

}
const saveOrder = async (req, res) => {
    const data = JSON.parse(req.body.data)
    const newOrder = new Histories( data)
    console.log(newOrder)
    try {
        newOrder.save((error)=>{
            if(error){
                return res.status(500).json({ message: res.message});
            } else {
                res.json({
                    message: 'Ok'
                })
            }
        })

    } catch (e) {
        return res.status(500).json({ message: res.message});
    }

}
module.exports ={
    saveOrder,
    getOrderById
}