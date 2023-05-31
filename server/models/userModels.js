// database connection
const pool = require('../middleware/dbconnection');

// user database functions
module.exports.getUsers = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM users`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.getUserById = async function(id){
    return new Promise((resolve, reject)=>{
        pool.query(`
        SELECT * FROM users
        WHERE id=?
        `, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            console.log(results);
            return resolve(results);
        });
    });
}

module.exports.getUserByUsername = async function(username){
    return new Promise((resolve, reject)=>{
        pool.query(`
        SELECT * FROM users
        WHERE id=? OR phone=? OR email=?
        `, [username, username, username], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports.createUser = async function(username, password, type, phone, email){
    return new Promise((resolve, reject)=>{
        pool.query(`
        INSERT INTO users (username, user_password, user_type, phone, email)
        VALUES(?, ?, ?, ?, ?)
        `, [username, password, type, phone, email], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}