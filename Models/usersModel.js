const { default: mongoose } = require('mongoose');
const {connectToDB} = require('./connection')

const conenction = connectToDB();

const userSchema = new mongoose.Schema({
        fullName: String,
        email: {type: String, unique:true},
        address: String,
        roles: [String],
        userName: {type: String, unique: true},
        password: String,
        lastLogin: {type: Date, default: Date}

})
const Users = mongoose.model('Users', userSchema);
module.exports = {Users}