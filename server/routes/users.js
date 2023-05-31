const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const pool = require('../middleware/dbconnection');

// database entity functions
const USER = require('../models/userModels');
const CLIENT = require('../models/clientModel');
const EMPLOYEE = require('../models/employeeModel');

// passport authentication middleware
passport.use(new LocalStrategy(function verify(username, password, cb){
  pool.query(`
  SELECT * FROM users
  WHERE username=? OR phone=? OR email=? 
  `, [username, username, username], 
  async function(err, row){
      if(err){ return cb(err); }
      if(!row){ return cb(null, false, { message: 'Incorrect username or password! '}); }
      if(row === []){ return cb(null, false, { message: 'Incorrect username or password! '}); }
      await bcrypt.compare(password, row[0].user_password, function(error, result){
          if(error){ return cb(error); }
          if(!result === row.user_password){
              return cb(null, false, "Incorrect password!");
          }
          return cb(null, row);
      });
  });
}));

passport.serializeUser(function(user, cb){
  process.nextTick(function(){
    cb(null, {id: user.id , username: user.username} )
  });
});

passport.deserializeUser(function(user, cb){
  process.nextTick(function(){
    cb(null, user)
  });
});

// user details route
router.get('/', async function(req, res, next) {
  const users = await USER.getUserByUsername('j@j.com');
  res.json({
    'message': 'welcome new user!',
    'users': users
  });
});

// signup route
router.post('/signup', 
check('username', 'username is needed!').not().isEmpty(),
check('password', 'password is needed!').not().isEmpty(),
check('email', 'email must be valid!').isEmail(),
async function(req, res, next){
  // input sanitation
  const errors = validationResult(req);
  if(!errors.isEmpty()){ 
    // response: validation error!
    console.error(errors);
  }
  const {username, password, type, phone, email} = req.body;
  const salt = bcrypt.genSaltSync(16);
  const hash = bcrypt.hashSync(password, salt);
  // create user account
  USER.createUser(username, hash, type, phone, email);
  if(type === 'client'){
    // user signup is client
    const clientName = await USER.getUserByUsername(email);
    console.log(clientName);
    CLIENT.createClient(clientName.id, clientName.email);
  }
  if(type === 'employee'){
    // user signup is employee
    const employeeName = await USER.getUserByUsername(phone);
    console.log(employeeName);
    EMPLOYEE.createEmployee(employeeName.id, employeeName.phone);
  }
  res.json({
    "message": "Your login was successful!"
  });
});

// login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/users/login'
}));

// logout route
router.post('/logout', function(req, res, next){
  req.logout(function(err){
    if(err){ return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
