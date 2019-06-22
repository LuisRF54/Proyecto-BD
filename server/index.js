const express = require('express');
const morgan = require('morgan');
const routes_mineral = require('./routes/mineral_routes');
const routes_rel_min = require('./routes/rel_min_routes');
const routes_yacimiento = require('./routes/yacimiento_routes');
const routes_aliado = require('./routes/aliado_routes');
const routes_lugar = require('./routes/lugar_routes');
const routes_tipo_pago = require('./routes/tipo_pago_routes');
const routes_cliente = require('./routes/cliente_routes');
const routes_privilegio = require('./routes/privilegio_routes');
const routes_yac_min = require('./routes/yac_min_routes');
const routes_almacen = require('./routes/almacen_routes');
const routes_presentacion = require('./routes/presentacion_routes');
const routes_min_pre = require('./routes/min_pre_routes');
const routes_turno = require('./routes/turno_routes');
const routes_orden_venta = require('./routes/orden_venta_routes');
const routes_orden_compra = require('./routes/orden_compra_routes');
const cors = require('cors');
//----------initializations-----------------
const app = express();
//---------settings-------------------------
app.set('port', process.env.PORT || 3000);

//-------------middlewares---------------------
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin : 'http://localhost:4200'}));

//-------------routes----------------------
app.use('/api/mineral',routes_mineral);
app.use('/api/relmin',routes_rel_min);
app.use('/api/yacimiento',routes_yacimiento);
app.use('/api/aliado',routes_aliado);
app.use('/api/lugar',routes_lugar);
app.use('/api/tipopago',routes_tipo_pago);
app.use('/api/cliente',routes_cliente);
app.use('/api/privilegio',routes_privilegio);
app.use('/api/yacmin',routes_yac_min);
app.use('/api/almacen',routes_almacen);
app.use('/api/presentacion',routes_presentacion);
app.use('/api/minpre',routes_min_pre);
app.use('/api/turno',routes_turno);
app.use('/api/ordenventa',routes_orden_venta);
app.use('/api/ordencompra',routes_orden_compra);

//----------------starting the server----------------------
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});