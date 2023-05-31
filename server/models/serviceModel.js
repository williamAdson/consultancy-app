// database connection
const pool = require('../middleware/dbconnection');

// service model functions
module.exports.getServices = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM service`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.getService = async function(id){
    return new Promise((resolve, reject)=>{
        pool.query(`
        SELECT * FROM service
        WHERE id=?
        `, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.createService = async function(title, desc, body){
    return new Promise((resolve, reject)=>{
        pool.query(`
        INSERT INTO service (title, description, body)
        VALUES(?, ?, ?)
        `, [title, desc, body], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}