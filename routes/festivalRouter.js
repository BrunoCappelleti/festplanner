const { Router } = require('express');
const { Festival } = require('../models');
const { userRouter } = require('./userRouter')

const festivalRouter = Router();

festivalRouter.get('/', async (req, res) => {
  try{
    const festivals = await Festival.findAll();
    res.json({festivals})
  } catch(e) {
    res.status(500).send(e.message);
  }
});

festivalRouter.get('/:id', async (req, res) => {
  try {
    const festival = await Festival.findByPk(req.params.id);
    res.json(festival);
  } catch(e) {
    res.status(404).send(e.message);
  }
})

festivalRouter.use('/:id/users', (req, res, next) => {
  res.locals.fesId = req.params.id;
  next();
}, userRouter)

module.exports = {festivalRouter};
