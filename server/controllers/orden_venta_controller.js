const ovCtrl = {};
const client = require('../database/connectiondb');

ovCtrl.getOrdenesVenta = async (req, res) => {
    await client.query("SELECT ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ovCtrl.getOrdenVenta = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta WHERE ov_numero = "+id)
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ovCtrl.getOrdenesVentaCliente = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ov_fecha AS Fecha, fk_cl_id AS Cliente, ov_total AS Total FROM Orden_Venta WHERE fk_cl_id = "+id)
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ovCtrl.createOrdenVenta = async (req, res) => {
    const ov = req.body;
    await client.query("INSERT INTO Orden_Venta (ov_fecha,fk_cl_id,ov_total) VALUES ('"+ov.fecha+"',"+ov.cliente+","+ov.total+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = ovCtrl;