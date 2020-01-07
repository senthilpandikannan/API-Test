const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/api.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/:id', product_controller.product_details_id);
router.get('/findall', product_controller.find_product_details);
router.post('/create', product_controller.product_create);
router.delete('/:id/delete', product_controller.product_details_id_delete);
router.delete('/deleteall', product_controller.delete_product_details);


module.exports = router;