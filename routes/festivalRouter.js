const { Router } = require('express');
const { Festival } = require('../models');

const festivalRouter = Router();

// festivalRouter.get('/', async (req, res) => {
//   res.json({ festivals: res.locals.festival})
// });

festivalRouter.get('/', async (req, res) => {
  try{
    const festivals = await Festival.findAll();
    res.json({festivals})
  } catch(e){
  console.error(e.message);
  }
});






module.exports = {festivalRouter};
