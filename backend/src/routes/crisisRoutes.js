
const express = require('express');
const router = express.Router();
const Crisis = require('../models/Crisis');

router.post('/', async (req, res) => {
    try {
        const newCrisis = new Crisis(req.body);
        const crisis = await newCrisis.save();
        res.status(201).json(crisis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const crises = await Crisis.find();
        res.status(200).json(crises);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
                    