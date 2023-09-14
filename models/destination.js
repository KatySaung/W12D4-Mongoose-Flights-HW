const {Schema, model} = require ('mongoose');

// Destination model with properties
// Part 2: Mongo DB HW
const destinationSchema = new Schema (


    {
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        },
        arrival: {
            type: Date,
        }  
    },
    {
        timestamps: true,
    }
);

const Destination = model('Destination', destinationSchema);
module.exports = Destination;