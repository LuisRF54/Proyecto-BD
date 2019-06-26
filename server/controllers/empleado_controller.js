const empCtrl = {};
const client = require('../database/connectiondb');

empCtrl.getEmpleados = async (req, res) => {
    await client.query("SELECT em_nombre AS Nombre, em_apellido AS Apellido, em_salario AS salario, fk_ca_clave AS Cargo, fk_l_clave AS Lugar FROM Empleado")
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

empCtrl.getEmpleado = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT em_nombre AS Nombre, em_apellido AS Apellido, em_salario AS salario, fk_ca_clave AS Cargo, fk_l_clave AS Lugar FROM Empleado WHERE em_id = "+id)
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

empCtrl.getEmpleadoCargo = async (req, res) => {
    const id = req.params.id;
    await client.query("SELECT em_nombre AS Nombre, em_apellido AS Apellido, em_salario AS salario, fk_ca_clave AS Cargo, fk_l_clave AS Lugar FROM Empleado WHERE fk_ca_clave = "+id)
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

empCtrl.createEmpleado = async (req, res) => {
    const emp = req.body;
    await client.query("INSERT INTO Empleado (em_nombre, em_apellido, em_salario, fk_ca_clave, fk_l_clave) VALUES ('"+emp.nombre+"','"+emp.apellido+"',"+emp.salario+","+emp.cargo+","+emp.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

empCtrl.editEmpleado = async (req, res) => {
    const id = req.params.id;
    const emp = req.body;
    await client.query("UPDATE Empleado SET em_nombre = '"+emp.nombre+"', em_apellido = '"+emp.apellido+"', em_salario = "+emp.salario+", fk_ca_clave = "+emp.cargo+", fk_l_clave = "+emp.lugar+" WHERE em_id = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

empCtrl.deleteEmpleado = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM Empleado WHERE em_id = "+id)
        .then(response => {
            res.json('Empleado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = empCtrl;