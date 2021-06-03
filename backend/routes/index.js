const express = require('express')
const Postmsg = require('./../Models/Cancer_classification')
//import { Postmsg } from './../Models/Cancer_classification'

const router = express.Router();

router.post('/Cancer', Postmsg);

module.exports = router;