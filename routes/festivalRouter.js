const { Router } = require('express');
const { Festival, User, Task } = require('../models');

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

festivalRouter.get('/users', async (req, res) => {
  try{
    const users = await User.findAll();
    res.json({users})
  }catch(e){
    console.error(e.message);
  }
});

festivalRouter.get('/tasks', async (req, res) => {
  try{
    const tasks = await Task.findAll();
    res.json({tasks})
  }catch(e){
    console.error(e.message);
  }
});

festivalRouter.post('/', async (req, res) => {
  const { task_title, task_date, task_notes } = req.body;
  const task = await Task.create({
    task_title,
    task_date,
    task_notes
  });
  const taskData= {
    ...task.dataValues,
  }
})

module.exports = festivalRouter;
