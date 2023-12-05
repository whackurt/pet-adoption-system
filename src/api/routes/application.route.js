const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');

// Create a new application
router.post('/', applicationController.createApplication);

// Get all applications
router.get('/', applicationController.getAllApplications);

// Get application by ID
router.get('/:id', applicationController.getApplicationById);

router.get('/adopter/:id', applicationController.getApplicationByAdopterId);

// Update application by ID
router.put('/:id', applicationController.updateApplicationById);

// Delete application by ID
router.delete('/:id', applicationController.deleteApplicationById);

module.exports = router;
