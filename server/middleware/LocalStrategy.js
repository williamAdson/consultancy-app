const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const pool = require('../middleware/dbconnection');

passport.use(new LocalStrategy(function verify(username, password, cb){
    pool.query(`
    SELECT * FROM users
    WHERE username=?
    `, [username], function(err, row){
        if(err){ return cb(err); }
        if(!row){ return cb(null, false, { message: 'Incorrect username or password! '}); }

        bcrypt.compare(password, hash, function(error, result){
            if(err){ return cb(error); }
            if(!result === row.user_password){
                return cb(null, false, "Incorrect password!");
            }
            return cb(null, row);
        });
    });
}));