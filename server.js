// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/bookings', bookingRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://cevns3:eDpvUwDIA6n32bOb@doggroomerdb.keawmvf.mongodb.net/?retryWrites=true&w=majority&appName=DogGroomerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from Dog Groomer Booking API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// In this code snippet, we have created a new booking model using Mongoose in models/Booking.js. 
//We have also created routes to create, read, update, and delete bookings in routes/bookingRoutes.js. 
//Finally, we have connected to MongoDB in server.js and started the server.
