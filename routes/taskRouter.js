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
  res.json(task.get())
});

taskRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  res.json(task);
})

taskRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id
      }
    });
    res.json(`Deleted task id ${id}`);
  } catch (e) {
    console.log(e);
    res.status(404).send('Task not found');
  }
});

taskRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);
    if (task !== null) {
      console.log(req.body);
      await task.update(req.body);
      res.json(task)
    }
  } catch(e){
      console.error(e.message);
    next(e);
  }
})

module.exports = { taskRouter }
