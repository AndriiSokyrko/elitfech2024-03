// {name: inpName, email: inpEmail, phone :inpPhone, address: inpAddress, total: totalPrice}
const mongoose = require('mongoose');

const TotalInfo = mongoose.model('totalInfo', {
    info: {
        id: {
            type: Number,
            required: false
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        } ,
        total: {
            type: Number,
            required: true
        }
    },
    orders: [
        {
            id: {
                type: Number,
                required: false

            },
            count: {
                type: Number,
                required: false

            },
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
            __v: {
                type: Number,
                required: false
            },
            _id: {
                type:String,
                required: false
            }
        }
        ]

});

module.exports = {
    TotalInfo
};
