const mongoose = require('mongoose');

// Define the schema for the Pet model
const petSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	animalType: {
		type: String,
		required: true,
	},
	breed: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	availableForAdoption: {
		type: Boolean,
		default: true, // By default, a pet is available for adoption
	},
	adoptionFee: {
		type: Number,
		required: true,
	},
	photos: {
		type: [String],
		required: true,
	},
});

// Create the Pet model based on the schema
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
