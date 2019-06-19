const express = require('express');
const router = express.Router();
const mineralCtrl = require('../controllers/mineral_controller');

router.get('/', mineralCtrl.getMinerales);
router.post('/', mineralCtrl.createMineral);
router.get('/:id', mineralCtrl.getMineral);
router.put('/:id', mineralCtrl.editMineral);
router.delete('/:id', mineralCtrl.deleteMineral);

module.exports = router;