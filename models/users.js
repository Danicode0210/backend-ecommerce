const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{type:String},
    lastname:{type:String},
    username:{type:String},
    password:{type:String},
    email:{type:String},
});
module.exports = User = mongoose.model('User', UserSchema);