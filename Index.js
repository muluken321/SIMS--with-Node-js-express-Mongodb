const config = require('config')
const express = require("express")
const students = require('./Routes/students')
const courses = require('./Routes/courses')
const users = require('./Routes/users')

const reports = require('./Routes/reports')
const app = express();
if(!config.get('jwtPrivateKey')){
    console.log("JWT Private key not found")
    process.exit(1)
}
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Student Informaton Management System API")
})
app.use('/student',students);
app.use('/course',courses)
app.use('/user',users)
app.use('/report',reports)
app.listen(3000)