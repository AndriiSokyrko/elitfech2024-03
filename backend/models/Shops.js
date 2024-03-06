const {mongoose} = require('mongoose');

const Shops = mongoose.model('Shops', {
  title:{
    type: String,
    required:true

  },
  idShop:{
    type: String,
    required:false

  }
});

module.exports = {
  Shops
};
