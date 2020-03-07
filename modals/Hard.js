const mongoose = require('mongoose');

const HardSchema = new mongoose.Schema({
    Hard:{
           type:Number,
        },
   
});

const Hard = mongoose.model('Hard',HardSchema);

module.exports = Hard;