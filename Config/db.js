var mongoose = require('mongoose');
try {
    mongoose.connect('mongodb@cluster0-ufh1c.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
    
} catch (error) {
    console.log("error=============>",error)
}
    module.exports = mongoose;