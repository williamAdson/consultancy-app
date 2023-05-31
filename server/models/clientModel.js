// database connection
const pool = require('../middleware/dbconnection');

// client database functions
module.exports.getClients = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM client`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.getClientById = async function(id){
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM client WHERE id=?`, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.createClient = async function(id, email){
    return new Promise((resolve, reject)=>{
        pool.query(`INSERT INTO client (user_id, client_email) VALUES(?, ?)`, [id, email], 
        (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.updateClient = async function(name, address, contact, details){
    return new Promise((resolve, reject)=>{
        pool.query(`INSERT INTO client (client_name, client_address, contact_person, client_details) VALUES(?, ?, ?, ?)`, [name, address, contact, details], 
        (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}