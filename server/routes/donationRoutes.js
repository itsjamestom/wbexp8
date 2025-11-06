const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Create donation
router.post('/', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.json(donation);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete donation by ID
router.delete('/:id', async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Donation deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

