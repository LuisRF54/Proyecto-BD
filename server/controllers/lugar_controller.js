const lCtrl = {};
const client = require('../database/connectiondb');

lCtrl.getEstados = async (req, res) => {
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Estado'")
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

lCtrl.getMunicipios = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Municipio' AND fk_l_clave ="+id)
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

lCtrl.getParroquias = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT * FROM Lugar WHERE l_tipo = 'Parroquia' AND fk_l_clave ="+id)
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

module.exports = lCtrl;