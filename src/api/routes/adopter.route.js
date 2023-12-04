const express = require('express');
const router = express.Router();
const adopterController = require('../controllers/adopter.controller');

// Get all adopters
router.get('/', adopterController.getAllAdopters);

// Get adopter by ID
router.get('/:id', adopterController.getAdopterById);

// Update adopter by ID
router.put('/:id', adopterController.updateAdopterById);

// Delete adopter by ID
router.delete('/:id', adopterController.deleteAdopterById);

module.exports = router;
