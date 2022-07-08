const express = require('express');
const router = express.Router();

//Models 
const {registerUser, login} = require('../Controllers/usersController')
// Data validation
const {validateUser} = require('../Controllers/dataValidation')
/* Login. */
router.post('/login',(req,res, next)=>{
        let userDetails = req.body
        let result = login(userDetails)
    
        result.then(function(response){
            response_data = response
            console.log(response)
        })
      
      res.send("logged in")
       // console.log(result)   
        next()
})
/* Get list of Users. Allowed Roles [Admin] */
router.get('/users',(req,res)=>{

})
/* Register Users {Register Teacher / Registrar}. Allowed Roles ->[Admin] */
router.post('/register',(req,res,next)=>{
    const {error} = validateUser(req.body)
    if(error) res.status(400).send(error.details[0].message)
    let result = registerUser(req.body)
    res.send(result)
    next();
})
/* Update User Info. Allowed Users [Admin] */
router.put('/update',(req,res)=>{

})
/* Delete User Info. Allowed Users [Admin] */

router.delete('/delete',(req,res)=>{

})

module.exports = router;