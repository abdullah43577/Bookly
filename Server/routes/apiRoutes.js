const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/api', apiController.api_index);

router.post('/api/upload', apiController.api_upload);
router.get('/api/get-all-books', apiController.api_get_all_books);
router.post('/api/checkout', apiController.api_checkout);
router.get('/api/:id', apiController.api_id);
router.delete('/api/delete-all-stores', apiController.api_delete_all_stores);

module.exports = router;
