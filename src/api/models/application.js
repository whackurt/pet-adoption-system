const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
	applicationDate: {
		type: Date,
		default: Date.now,
	},
	adopterId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Adopter',
		required: true,
	},
	petId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pet',
		required: true,
	},
	status: {
		type: Number,
		required: true,
	},
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
