const express = require('express');
const router = express.Router();
const ovCtrl = require('../controllers/orden_venta_controller');

router.get('/', ovCtrl.getOrdenesVenta);
router.get('/:id', ovCtrl.getOrdenVenta);
router.get('/cliente/:id', ovCtrl.getOrdenesVentaCliente);
router.post('/', ovCtrl.createOrdenVenta);

module.exports = router;