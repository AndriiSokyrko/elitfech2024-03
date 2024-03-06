const {mongoose, Schema} = require('mongoose');
const schemaGoods = new Schema({
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

const Goods = mongoose.model('goods',schemaGoods);

module.exports = {
  Goods
};
