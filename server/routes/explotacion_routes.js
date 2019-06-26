const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/explotacion_controller');

router.get('/', empCtrl.getExplotaciones);
router.get('/:id', empCtrl.getExplotacion);
router.get('/ordenventa/:id', empCtrl.getExplotacionOV);
router.get('/yacmin/:id', empCtrl.getExplotacionYM);
router.post('/', empCtrl.createExplotacion);
router.put('/:id', empCtrl.editExplotacion);

module.exports = router;