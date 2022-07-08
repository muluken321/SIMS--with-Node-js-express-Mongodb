const express = require('express');
const router = express.Router();

/* Get courses. Allowed Roles -> [All Authenticatted Users] */
router.get('/',(req,res)=>{
res.send("courseList")
})

/* Get a Course. Allowed Roles -> [All Authenticated Users] */
router.get('/:id',(req,res)=>{

})

/* Register a course. Allowed Users ->[Admin, Registrar] */
router.post('/register',(req,res)=>{

})

/*Update a course. Allowed Users->[Admin, Registrar] */
router.put('/:id',(req,res)=>{

})
/*Delete a course. Allowed Users->[Admin, Registrar] */
router.delete('/:id',(req,res)=>{

})

module.exports = router