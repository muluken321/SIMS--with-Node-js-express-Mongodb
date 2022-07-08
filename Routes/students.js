const express = require('express');
const router = express.Router();

/* List all Students. Allowed Roles->[Teacher, Admin, Registrar] */
router.get('/',(req,res)=>{
res.send("list of students")
})
/* Get one Student. Allowed Roles->[Teacher, Admin, Registrar] */
router.get('/:id',(req,res)=>{
    res.send("student id to be selected is "+req.params.id)
})
/* Register a new student. Allowed Roles->[Admin, Registrar] */
router.post('/register',(req,res)=>{
    res.send("student registration allowed here")
})
/* StudentCourse Enrollement. Allowed Roles-> [Admin, Registrar] */
router.post('/add-courses',(req,res)=>{
    res.send("student registration allowed here")
})
/* Update Student Marks. Roles-> Allowed [Admin, Registrar, Teacher] */
router.put('/update-course-mark',(req,res)=>{
    res.send("student registration allowed here")
})
/* Update Student`s Info. Roles-> Allowed [Admin, Registrar]  */
router.put('/:id',(req,res)=>{
    res.send("student id to be updated is "+req.params.id)
})
/* Delete a Student. allowed Roles-> Allowed [Admin, Registrar]  */
router.delete('/:id',(req,res)=>{
    res.send("student id to be deleted is "+req.params.id)
})
module.exports = router