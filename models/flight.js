const { Schema, model } = require('mongoose');

// Flight Model with properties
const flightSchema = new Schema(

    // HELP: ERROR VALIDATIOR ERROR, path required
    // HELP: How to include default values??

    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United'],
            required: true,
        },
        flightNo: {
            type: Number,
            min: 10,
            max: 9999,
            required: true,
        },
        departs: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);

const Flight = model('Flight', flightSchema);
module.exports = Flight;