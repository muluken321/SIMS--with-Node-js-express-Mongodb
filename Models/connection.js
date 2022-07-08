const mongoose = require('mongoose');

const connectToDB = () =>{
    mongoose.connect("mongodb://localhost:27017/SIMS")
    .then(()=>{
    console.log("connected to Mongo DB");
    })
    .catch(()=>{
        console.log("error ");
    })
}
module.exports = {connectToDB};