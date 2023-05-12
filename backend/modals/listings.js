const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingsSchema = new Schema({
    userName:{type:String},
    from : {type:Number}, 
    to : {type:Number} ,
    part_id : {type: String}
    
    // 0 for Aircraft Manufacturers
                         // 1 for Airline
                         // 2 for Recycle
})

const listingsModal = mongoose.model("listings",listingsSchema)

module.exports = listingsModal ;