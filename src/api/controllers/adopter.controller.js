const Adopter = require('../models/adopter'); // Assuming adopter.js contains your Adopter model

// Get all adopters
exports.getAllAdopters = async (req, res) => {
	try {
		const adopters = await Adopter.find();
		res
			.status(200)
			.json({ message: 'Adopter fetched successfully', data: adopters });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error getting adopters', error: err.message });
	}
};

// Get adopter by ID
exports.getAdopterById = async (req, res) => {
	try {
		const adopter = await Adopter.findById(req.params.id);

		if (!adopter) {
			return res.status(404).json({ message: 'Adopter not found' });
		}

		return res.status(200).json({ adopter });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error getting adopter', error: err.message });
	}
};

// Update adopter by ID
exports.updateAdopterById = async (req, res) => {
	try {
		const updatedAdopter = await Adopter.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedAdopter) {
			return res.status(404).json({ message: 'Adopter not found' });
		}

		return res.status(200).json({
			message: 'Adopter updated successfully',
			data: updatedAdopter,
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error updating adopter', error: err.message });
	}
};

// Delete adopter by ID
exports.deleteAdopterById = async (req, res) => {
	try {
		const deletedAdopter = await Adopter.findByIdAndDelete(req.params.id);
		if (!deletedAdopter) {
			return res.status(404).json({ message: 'Adopter not found' });
		}
		res.status(200).json({ message: 'Adopter deleted successfully' });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error deleting adopter', error: err.message });
	}
};
