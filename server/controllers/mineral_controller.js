const mineralCtrl = {};
const client  = require('../database/connectiondb');

mineralCtrl.getMinerales = async (req, res) => {
    await client.query("SELECT * FROM Mineral;")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.getMineral = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT mi_nombre AS Nombre, mi_tipo AS Tipo FROM Mineral WHERE mi_id = "+id+";")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.createMineral = async (req, res) => {
    const min = req.body;
    await client.query("INSERT INTO Mineral (mi_nombre, mi_tipo, mi_descripcion) VALUES ('"+min.nombre+"','"+min.tipo+"','"+min.descripcion+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.editMineral = async (req, res) => {
    const id = req.params.id;
    const min = req.body;
    await client.query("UPDATE Mineral SET mi_nombre ='"+min.nombre+"', mi_tipo ='"+min.tipo+"', mi_descripcion = '"+min.descripcion+"' WHERE mi_id = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

mineralCtrl.deleteMineral = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Mineral WHERE mi_id = "+id+";")
        .then(response => {
            res.json('Mineral eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = mineralCtrl;