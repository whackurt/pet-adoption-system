const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

// Create a new pet
router.post('/', petController.createPet);

// Get all pets
router.get('/', petController.getAllPets);

// Get pet by ID
router.get('/:id', petController.getPetById);

// Update pet by ID
router.put('/:id', petController.updatePetById);

// Delete pet by ID
router.delete('/:id', petController.deletePetById);

module.exports = router;
