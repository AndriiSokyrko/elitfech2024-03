const {Shops} = require("../models/Shops");


const getShops = async (req, res) => {
    try {
        const shops = await Shops.find()
        if(!shops.length ){
            return res.status(200).json(
                {
                    "message":
                    "No shops"
                }
            );
        }

        return res.status(200).json(
            {
                "shops":
                shops
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}


module.exports = {
  getShops
};
