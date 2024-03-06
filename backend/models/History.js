const {mongoose, Schema} = require('mongoose');
const address = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    }
})
const goods = new Schema({
    title: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    idShop: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

const schemaHistory = new Schema({
    items: [goods],
    info: address

})
const Histories = mongoose.model('histories',schemaHistory);

module.exports = {
    Histories
};
