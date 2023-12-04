const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

// Create the Adopter model based on the schema
const Adopter = mongoose.model('Adopter', adopterSchema);

module.exports = Adopter;
