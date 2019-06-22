const ocCtrl = {};
const client = require('../database/connectiondb');

ocCtrl.getOrdenesCompra = async (req, res) => {
    await client.query("SELECT oc_fecha AS Fecha, fk_ali_id AS Aliado, oc_total AS Total FROM Orden_Compra")
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

ocCtrl.getOrdenCompra = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT oc_fecha AS Fecha, fk_ali_id AS Aliado, oc_total AS Total FROM Orden_Compra WHERE oc_numero = "+id)
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

ocCtrl.getOrdenesCompraAliado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT oc_fecha AS Fecha, fk_ali_id AS Aliado, oc_total AS Total FROM Orden_Compra WHERE fk_ali_id = "+id)
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

ocCtrl.createOrdenCompra = async (req, res) => {
    const oc = req.body;
    await client.query("INSERT INTO Orden_Compra (oc_fecha,fk_ali_id,oc_total) VALUES ('"+oc.fecha+"',"+oc.aliado+","+oc.total+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = ocCtrl;