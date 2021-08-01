const express = require('express')
const Cancer_classification = require('./../Models/Cancer_classification')
const Board_review = require('./../Models/Board_review')
const Diabetes = require('./../Models/Diabetes');
const Digit = require('./../Models/Digit');
const router = express.Router();

router.post('/Cancer', Cancer_classification);
router.post('/BoardGame', Board_review);
router.post('/Diabetes', Diabetes);
router.post('/DigitRecognition', Digit);

module.exports = router;