

const bcrypt = require('bcrypt');

const {Users} = require('../Models/usersModel')
const registerUser = async(userData) =>{
     let salt = await bcrypt.genSalt(10);
     userData.password = await bcrypt.hash(userData.password, salt);
     let userExist = await Users.findOne({email: userData.email})
     if(userExist) return "User already existed"
     const user = new Users(userData)
     let response =  user.save();
     return "User Registered"
}

const login = async(loginData)=>{
    let getUser = await Users.findOne({userName: loginData.userName})
    if(!getUser) return "error! user not found"
    const checkPassword = await bcrypt.compare(loginData.password, getUser.password);
    if(!checkPassword) return "error! invalid password"
    // const token =  jwt.sign({id: getUser._id}, config.get('jwtPrivateKey'))
    const token = getUser.generateLogInToken()
        return {token,
                role:getUser.roles,
                user:getUser.userName}

}

module.exports = {
    registerUser,
    login,
}