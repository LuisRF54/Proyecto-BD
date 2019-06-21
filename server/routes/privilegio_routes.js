const express = require('express');
const router = express.Router();
const priCtrl = require('../controllers/privilegio_controller');

router.get('/', priCtrl.getPrivilegios);
router.get('/:id', priCtrl.getPrivilegio);

module.exports = router;