const Pet = require('../models/pet');

// Create a new pet
exports.createPet = async (req, res) => {
	try {
		const newPet = await Pet.create(req.body);
		res
			.status(201)
			.json({ message: 'Pet created successfully', data: { pet: newPet } });
	} catch (err) {
		res.status(500).json({ message: 'Error creating pet', error: err.message });
	}
};

// Get all pets
exports.getAllPets = async (req, res) => {
	try {
		const pets = await Pet.find();
		res
			.status(200)
			.json({ message: 'Pets fetched successfully', data: { pets } });
	} catch (err) {
		res.status(500).json({ message: 'Error getting pets', error: err.message });
	}
};

// Get pet by ID
exports.getPetById = async (req, res) => {
	try {
		const pet = await Pet.findById(req.params.id);
		if (!pet) {
			return res.status(404).json({ message: 'Pet not found' });
		}
		res
			.status(200)
			.json({ message: 'Pet fetched successfully', data: { pet } });
	} catch (err) {
		res.status(500).json({ message: 'Error getting pet', error: err.message });
	}
};

// Update pet by ID
exports.updatePetById = async (req, res) => {
	try {
		const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updatedPet) {
			return res.status(404).json({ message: 'Pet not found' });
		}
		res
			.status(200)
			.json({ message: 'Pet updated successfully', data: { pet: updatedPet } });
	} catch (err) {
		res.status(500).json({ message: 'Error updating pet', error: err.message });
	}
};

// Delete pet by ID
exports.deletePetById = async (req, res) => {
	try {
		const deletedPet = await Pet.findByIdAndDelete(req.params.id);
		if (!deletedPet) {
			return res.status(404).json({ message: 'Pet not found' });
		}
		res.status(200).json({ message: 'Pet deleted successfully' });
	} catch (err) {
		res.status(500).json({ message: 'Error deleting pet', error: err.message });
	}
};
