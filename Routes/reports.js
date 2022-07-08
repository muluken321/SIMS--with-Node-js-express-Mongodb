const express = require('express');
const router = express.Router();

/* Get Marks for logged in student. Allowed Roles ->[Student] */
router.get('/my-mark/:id',(req,res)=>{

})
/* Get Marks of any student. Allowed Roles ->[Teacher, Registrar, Admin] */
router.get('/get-mark/:id',(req,res)=>{
    
})

module.exports = router;