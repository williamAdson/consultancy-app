var express = require('express');
var router = express.Router();

// database connection 
const { getServices, getService, createService } = require('../models/serviceModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // fetch query: all services
  const service = await getServices();
  // response: service json file
  res.json({
    ...service
  });

});

router.get('/service/:id', async function(req, res, next){
  // param from user: service id
  const id = req.params.id;
  console.log(id)
  // fetch query: service by id
  const service = await getService(id);
  // response: service json file
  res.json({
    "company": "WGC",
    "service": service
  })

});

router.post('/service/create', async function(req, res, next){
  try{
    // destructure params: service attributes
    const {title, desc, body} = req.body;
    // save query: service object
    if(!title) throw new Error('service needs title!');
    if(!desc) throw new Error('service needs description!');
    
    const service = await createService(title, desc, body);
    // response: saved service
    res.json({
      "company": "WGC",
      "service": service
    });
  }catch(e){
    console.log(e)
    res.redirect('/');
  }

});

module.exports = router;
