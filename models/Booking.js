// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    serviceType: { type: String, required: true },
    petDetails: {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        breed: { type: String, required: true }
    },
    ownerDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    status: { type: String, default: 'scheduled' } // Possible values: scheduled, cancelled, completed
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
