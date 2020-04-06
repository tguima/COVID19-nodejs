const router = require('express').Router()
const CSV = require('../controllers/CSVparser')

router.get('/:doc/:segmento', CSV.CSVparser)

module.exports = router;