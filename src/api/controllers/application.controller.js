const Application = require('../models/application');

// Create a new application
exports.createApplication = async (req, res) => {
	try {
		const newApplication = await Application.create(req.body);
		res.status(201).json({
			message: 'Application created successfully',
			data: { application: newApplication },
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error creating application', error: err.message });
	}
};

// Get all applications
exports.getAllApplications = async (req, res) => {
	try {
		const applications = await Application.find()
			.populate('adopterId')
			.populate('petId');
		res.status(200).json({
			message: 'Applications fetched successfully',
			data: { applications },
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error getting applications', error: err.message });
	}
};

// Get application by ID
exports.getApplicationById = async (req, res) => {
	try {
		const application = await Application.findById(req.params.id)
			.populate('adopterId')
			.populate('petId');
		if (!application) {
			return res.status(404).json({ message: 'Application not found' });
		}
		res.status(200).json({
			message: 'Application fetched successfully',
			data: { application },
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error getting application', error: err.message });
	}
};

exports.getApplicationByAdopterId = async (req, res) => {
	try {
		const applications = await Application.find({ adopterId: req.params.id })
			.populate('adopterId')
			.populate('petId');
		if (!applications) {
			return res.status(404).json({ message: 'Application not found' });
		}
		res.status(200).json({
			message: 'Application fetched successfully',
			data: { applications },
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error getting application', error: err.message });
	}
};

// Update application by ID
exports.updateApplicationById = async (req, res) => {
	try {
		const updatedApplication = await Application.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedApplication) {
			return res.status(404).json({ message: 'Application not found' });
		}
		res.status(200).json({
			message: 'Application updated successfully',
			data: { application: updatedApplication },
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error updating application', error: err.message });
	}
};

// Delete application by ID
exports.deleteApplicationById = async (req, res) => {
	try {
		const deletedApplication = await Application.findByIdAndDelete(
			req.params.id
		);
		if (!deletedApplication) {
			return res.status(404).json({ message: 'Application not found' });
		}
		res.status(200).json({ message: 'Application deleted successfully' });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error deleting application', error: err.message });
	}
};
