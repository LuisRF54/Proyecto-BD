//en desarrollo
const relMinCtrl = {};
const client  = require('../database/connectiondb');

relMinCtrl.getRelMineral = async (req, res) => {
    await client.query("SELECT * FROM Relacion-Min;")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

relMinCtrl.getRelMinerales = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT rm_nombre AS Nombre, fk_mi_id_1 AS Extraedor, fk_mi_id_2 AS Extraido FROM Relacion-Min WHERE mi_id = "+id+";")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

relMinCtrl.createRelMineral = async (req, res) => {
    const min = req.body;
    await client.query("INSERT INTO Rel-Mineral (rm) VALUES ('"+min.nombre+"','"+min.tipo+"','"+min.descripcion+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

relMinCtrl.editMineral = async (req, res) => {
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

relMinCtrl.deleteMineral = async (req, res) => {
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

module.exports = relMinCtrl;