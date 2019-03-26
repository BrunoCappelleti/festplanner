const { Router } = require('express');
const { Task } = require('../models');

const taskRouter = Router();

// taskRouter.get('/', async (req, res) => {
//   res.json({ tasks: res.locals.task})
// });

taskRouter.get('/', async (req, res) => {
  try{
    const tasks = await Task.findAll();
    res.json({tasks})
  } catch(e){
  console.error(e.message);
  }
});

// Route for posting tasks :WORKS:
taskRouter.post('/', async (req, res) => {
  const { task_title, task_date, task_notes } = req.body;
  const task = await Task.create({
    task_title,
    task_date,
    task_notes
  });
  const taskData = {
    ...task.dataValues,
  }
});

module.exports = { taskRouter }
