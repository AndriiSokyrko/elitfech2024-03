const mongoose = require('mongoose');

const Menu = mongoose.model('Menu', {
  id:{
    type: String,
    required:false

  },
  title:{
    type: String,
    required:true

  },

});

module.exports = {
  Menu ,
};
