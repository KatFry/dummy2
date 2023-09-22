// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'mongodb+srv://katgfry:GN5wDLrRPtOTNkGI@cluster0.pi0wg1d.mongodb.net/';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const mongoose = require('mongoose');

// Adding this to aid in postman testing.
mongoose.connect('mongodb+srv://katgfry:GN5wDLrRPtOTNkGI@cluster0.pi0wg1d.mongodb.net/');

const messageSchema = new mongoose.Schema({
  message: {type: String, required: true},
  password: {type: String, required: true},
  created_at: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Message', messageSchema); // <-- export your model