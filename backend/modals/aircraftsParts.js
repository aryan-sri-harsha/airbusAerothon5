const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({}, { strict: false });
const aircraftParts = mongoose.model('aircraftParts', ProductSchema, 'aircraftParts');

module.exports =  aircraftParts ;