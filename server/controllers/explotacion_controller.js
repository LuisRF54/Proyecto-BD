const expCtrl = {};
const client  = require('../database/connectiondb');

expCtrl.getExplotaciones = async (req, res) => {
    await client.query("SELECT ex_cantidad AS Cantidad, ex_fecha AS Fecha, fk_ym_id AS yac_min, fk_ov_numero AS Orden_venta FROM Explotacion")
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

expCtrl.getExplotacion = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ex_cantidad AS Cantidad, ex_fecha AS Fecha, fk_ym_id AS yac_min, fk_ov_numero AS Orden_venta FROM Explotacion WHERE ex_id = "+id)
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

expCtrl.getExplotacionOV = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ex_cantidad AS Cantidad, ex_fecha AS Fecha, fk_ym_id AS yac_min, fk_ov_numero AS Orden_venta FROM Explotacion WHERE fk_ov_numero = "+id)
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

expCtrl.getExplotacionYM = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT ex_cantidad AS Cantidad, ex_fecha AS Fecha, fk_ym_id AS yac_min, fk_ov_numero AS Orden_venta FROM Explotacion WHERE fk_ym_id = "+id)
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

expCtrl.createExplotacion = async (req, res) => {
    const exp = req.body;
    await client.query("INSERT INTO Explotacion (ex_cantidad, ex_fecha, fk_ym_id, fk_ov_numero) VALUES ("+exp.cantidad+",'"+exp.fecha+"',"+exp.yac_min+","+exp.orden_venta+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

expCtrl.editExplotacion = async (req, res) => {
    const id = req.params.id;
    const exp = req.body;
    await client.query("UPDATE Explotacion SET ex_cantidad ="+exp.cantidad+", ex_fecha ='"+exp.fecha+"', fk_ym_id = "+exp.yac_min+", fk_ov_numero = "+exp.orden_venta+" WHERE ex_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = expCtrl;