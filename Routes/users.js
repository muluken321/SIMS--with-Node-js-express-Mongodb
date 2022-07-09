const express = require('express');
const router = express.Router();

//Models 
const {registerUser, login} = require('../Controllers/usersController')
// Data validation
const {validateUser} = require('../Controllers/dataValidation')
//Authorization 
const {auth} = require('../Middleware/auth')
const {adminAuth} = require('../Middleware/adminAuth')
/* Login. */
router.post('/login',async(req,res, next)=>{
        let userDetails = req.body
        let result = login(userDetails)
        await result.then(function(response){
            console.log(response.token)
            res.header('x-auth-token',response.token).send(response)
        })

      

        next()
})
/* Get list of Users. Allowed Roles [Admin] */
router.get('/users',(req,res)=>{

})
/* Register Users {Register Teacher / Registrar}. Allowed Roles ->[Admin] */
router.post('/register',adminAuth, async(req,res,next)=>{
    const {error} = validateUser(req.body)
    if(error) res.status(400).send(error.details[0].message)
    let result = registerUser(req.body)
    await result.then(function(response){
        res.send(response)
    })

    next();
})
/* Update User Info. Allowed Users [Admin] */
router.put('/update',(req,res)=>{

})
/* Delete User Info. Allowed Users [Admin] */

router.delete('/delete',(req,res)=>{

})

module.exports = router;