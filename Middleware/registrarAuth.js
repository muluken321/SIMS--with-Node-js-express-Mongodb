const jwt = require('jsonwebtoken')
const config = require('config')
const registrarAuth = (req, res, next)=>{
const token = req.header('x-auth-token')
if(!token)return res.status(401).send("Access Denied! You are not logged in")
try{
    let checkToken = jwt.verify(token, config.get('jwtPrivateKey'))
    req.user = checkToken
    if(checkToken.role[0]!='Registrar')return res.status(401).send("Access Denied! You are not Registrar User")
    console.log('token is', checkToken.role[0])
}
catch(e){
    res.status(401).send("Access Denied! You are not logged in")  
}
    next()
}
exports.registrarAuth = registrarAuth