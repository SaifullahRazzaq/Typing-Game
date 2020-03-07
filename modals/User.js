
const mongoose = require('mongoose');
///const bcryptjs=require('bcryptjs');

const UsersSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String
    }

   
});


// UsersSchema.method.comparePassword = function (password) {
//     const user = this;
//     return bcryptjs.compareSync(password, user.password)
// }

// UsersSchema.pre("save",function(next){
//     //user milega this main jo register ho raha hai
//     const user=this;
//     const salt=bcryptjs.genSaltSync(10);
//     const hash=bcryptjs.hashSync(user.password,salt);
//     user.password=hash;
//     console.log("userpassword======>",user.password)
//     next();

// })



//hook thet will run before save methoh
const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;