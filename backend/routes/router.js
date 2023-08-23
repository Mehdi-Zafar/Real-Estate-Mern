const express = require('express');
const router = express.Router();
const {
    createProperty,
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty
} = require('../controllers/controller')

router.get('/',getProperties)

router.get('/:id',getProperty)

router.post('/', createProperty)

router.delete('/:id',deleteProperty)

router.patch('/:id',updateProperty)


module.exports = router;