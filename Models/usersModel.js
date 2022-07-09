const jwt = require('jsonwebtoken')
const config = require('config')
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
userSchema.methods.generateLogInToken = function(){
const token =  jwt.sign({id: this._id, role:this.roles}, config.get('jwtPrivateKey'))
return token
}
const Users = mongoose.model('Users', userSchema);
module.exports = {Users}