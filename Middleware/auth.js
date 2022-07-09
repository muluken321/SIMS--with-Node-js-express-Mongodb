const jwt = require('jsonwebtoken')
const config = require('config')
const auth = (req, res, next)=>{
const token = req.header('x-auth-token')
if(!token)return res.status(401).send("Access Denied! You are not logged in")
try{
    let checkToken = jwt.verify(token, config.get('jwtPrivateKey'))
    req.user = checkToken
    console.log('token is', checkToken)
}
catch(e){
    res.status(401).send("Access Denied! You are not logged in")  
}
    next()
}
exports.auth = auth