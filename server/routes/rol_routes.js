const express = require('express');
const router = express.Router();
const rolCtrl = require('../controllers/rol_controller');

router.get('/', rolCtrl.getRoles);
router.get('/:id', rolCtrl.getRol);

module.exports = router;