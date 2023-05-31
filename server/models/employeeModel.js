// database connection
const pool = require('../middleware/dbconnection');

// employee database functions
module.exports.getEmployees = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM employee`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.getEmployeeById = async function(id){
    return new Promise((resolve, reject)=>{
        pool.query(`
        SELECT * FROM employee
        WHERE id=?
        `, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.createEmployee = async function(id, phone){
    return new Promise((resolve, reject)=>{
        pool.query(`
        INSERT INTO employee (user_id, employee_phone)
        VALUES(?, ?)
        `, [id, phone], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.updateEmployee = async function(name, address, contact, dob, nrc, details){
    return new Promise((resolve, reject)=>{
        pool.query(`
        INSERT INTO employee (employee_name, employee_address, contact_person, dob, nrc_number, employee_details)
        VALUES(?, ?, ?, ?, ?, ?)
        `, [name, address, contact, dob, nrc, details], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}