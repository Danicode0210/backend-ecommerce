const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{type:String},
    lastname:{type:String},
    username:{type:String},
    idType:{type:String},
    userDocument:{type:Number},
    password:{type:String},
    email:{type:String},
    role:{type:String,
    default:'user'}
});
module.exports = User = mongoose.model('User', UserSchema);