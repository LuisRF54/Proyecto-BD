const minPreCtrl = {};
const client  = require('../database/connectiondb');

minPreCtrl.getMinPresentaciones = async (req, res) => {
    await client.query("SELECT fk_mi_id AS Mineral, fk_pre_clave AS Presentacion, mp_costo AS Costo FROM Min_Pre")
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

minPreCtrl.getMinPre = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT fk_mi_id AS Mineral, fk_pre_clave AS Presentacion, mp_costo AS Costo FROM Min_Pre WHERE fk_mi_id = "+id)
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

minPreCtrl.getPreMin = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT fk_mi_id AS Mineral, fk_pre_clave AS Presentacion, mp_costo AS Costo FROM Min_Pre WHERE fk_pre_clave = "+id)
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

minPreCtrl.createMinPre = async (req, res) => {
    const mp = req.body;
    await client.query("INSERT INTO Min_Pre (fk_mi_id, fk_pre_clave,mp_costo) VALUES ("+mp.mineral+","+mp.presentacion+","+mp.costo+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

minPreCtrl.editMinPre = async (req, res) => {
    const id = req.params.id;
    const mp = req.body;
    await client.query("UPDATE Min_Pre SET fk_mi_id ="+mp.mineral+", fk_pre_clave ="+mp.presentacion+", mp_costo ="+mp.costo+" WHERE mp_id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

minPreCtrl.deleteMinPre = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Min_Pre WHERE mp_id = "+id)
        .then(response => {
            res.json('Min_Pre eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = minPreCtrl;