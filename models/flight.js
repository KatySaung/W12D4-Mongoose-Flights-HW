const { Schema, model } = require('mongoose');

// Flight Model with properties
const flightSchema = new Schema(
    {
        airline: String,
        flightNo: Number,
        departs: Date,

    }
)
const Flight = model('Flight', flightSchema)
module.exports = Flight;