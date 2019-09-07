const mongoose=require('mongoose');
const Schemas=mongoose.Schema;
const UserSchema=new Schemas({
    Name:{
        type:String,
        required:true,
        unique:true,
    },
    
    
})
const User=mongoose.model('User',UserSchema);

module.exports=User;