const mongoose = require('mongoose');
const bcryptjs=require('bcryptjs');

const EasySchema = new mongoose.Schema({
    Easy:{
           type:Number,
        },
   
});

const Easy = mongoose.model('Easy',EasySchema);

module.exports = Easy;