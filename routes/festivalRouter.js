const { Router } = require('express');
const { Festival } = require('../models');
const { userRouter } = require('./userRouter')

const festivalRouter = Router();

festivalRouter.get('/', async (req, res) => {
  try{
    const festivals = await Festival.findAll();
    res.json({festivals})
  } catch(e){
  console.error(e.message);
  }
});

festivalRouter.use('/:id/users', (req, res, next) => {
  res.locals.fesId = req.params.id;
  next();
}, userRouter)

module.exports = {festivalRouter};
