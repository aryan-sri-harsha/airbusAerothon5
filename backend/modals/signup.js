const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    email:{type:String},
    userName:{type:String},
    password:{type:String},
    type : {type:Number} // 0 for Aircraft Manufacturers
                         // 1 for Airline
                         // 2 for Recycle
})

const sigupModal = mongoose.model("signup",signupSchema)

module.exports = sigupModal ;