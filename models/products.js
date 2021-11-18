const { strictEqual } = require('assert');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    image:{type:String},
    name:{type:String},
    description:{type:String},
    price:{type:Number}
});
module.exports = User = mongoose.model('User', UserSchema);