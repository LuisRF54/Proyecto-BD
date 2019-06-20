const express = require('express');
const morgan = require('morgan');
const routes_mineral = require('./routes/mineral_routes');
const routes_rel_min = require('./routes/rel_min_routes');
const routes_yacimiento = require('./routes/yacimiento_routes');
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

//----------------starting the server----------------------
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});