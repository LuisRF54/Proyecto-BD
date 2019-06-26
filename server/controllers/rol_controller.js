const rolCtrl = {};
const client = require('../database/connectiondb');

rolCtrl.getRoles = async (req,res) => {
    await client.query("SELECT r_clave AS id, r_nombre AS nombre FROM Rol")
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

rolCtrl.getRol = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT r_clave AS id, r_nombre AS nombre FROM Rol WHERE r_clave = "+id)
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

module.exports = rolCtrl;