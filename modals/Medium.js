const mongoose = require('mongoose');

const MediumSchema = new mongoose.Schema({
    Medium:{
           type:Number,
        },
   
});

const Medium = mongoose.model('Medium',MediumSchema);

module.exports = Medium;