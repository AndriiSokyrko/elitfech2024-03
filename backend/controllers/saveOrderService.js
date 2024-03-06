const {TotalInfo } = require("../models/TotalInfo");



const saveTotalInfo = async (req, res) => {
    try {
        const schema = new TotalInfo(req.body);

        try {
            schema.validateSync()
            schema.save().then(async (saved) => {
                return res.status(200).json({"message": res.message});
            })

        } catch (err) {
            let mes =  await Error.findById({_id:'62ff718aed13babb9f2714bd'})
            return err.status(400).json({message: mes.message});
        }
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}
const getTotalInfo = async (req, res) => {
    try {
        const totalInfo = await TotalInfo.find({})
        if(!totalInfo.length ){
            return res.status(200).json(
                {
                    "message":
                    "No info"
                }
            );
        }

        return res.status(200).json(
            {
                "total":
                totalInfo
            }
        );
    } catch (e) {
        return res.status(500).json({ message: res.message});
    }
}


module.exports = {
  saveTotalInfo,
  getTotalInfo
};
