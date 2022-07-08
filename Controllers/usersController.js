const config = require('config')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {Users} = require('../Models/usersModel')
const registerUser = async(userData) =>{
     let salt = await bcrypt.genSalt(10);
     userData.password = await bcrypt.hash(userData.password, salt);
     let userExist = await Users.findOne({email: userData.email})
     if(userExist) return "User already existed"
     const user = new Users(userData)
     let response =  user.save();
     console.log(response)
     return "User Registered"
}

const login = async  (loginData)=>{
    console.log(loginData)
    let getUser = await Users.findOne({userName: loginData.userName})
    if(!getUser) return "error! user not found"
    const checkPassword = await bcrypt.compare(loginData.password, getUser.password);
    if(!checkPassword) return "error! invalid password"
    const token = jwt.sign({id: getUser._id}, config.get('jwtPrivateKey'))
    // console.log("logged in", token)
return token
}

module.exports = {
    registerUser,
    login,
}