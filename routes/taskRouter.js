const { Router } = require('express');
const { User, Task } = require('../models');

const taskRouter = Router();

taskRouter.get('/', async (req, res) => {
  try{
    const user = await User.findByPk(res.locals.userId);
    const tasks = await user.getTasks();
    res.json(tasks)
  } catch(e){
    console.error(e.message);
    res.status(500).send(e.message);
  }
});

taskRouter.post('/', async (req, res) => {
  try {
    const { task_title, task_date, task_notes, task_status } = req.body;
    const user = await User.findByPk(res.locals.userId);
    const newTask = await user.createTask({
      task_title,
      task_date,
      task_notes,
      task_status,
    });
    const task = {
      ...newTask.dataValues,
    }
    res.json(task);
  } catch(e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

taskRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

taskRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task !== null) {
      const updatedTask = await task.update(req.body);
      res.json({ update: updatedTask });
    }
  } catch(e){
      console.error(e.message);
    next(e);
  }
});

taskRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await Task.destroy({
      where: {
        id
      }
    });
    res.json({ messge: `Deleted task id ${id}`,  response: resp });
  } catch (e) {
    console.log(e);
    res.status(500).send('Task not found');
  }
});

module.exports = { taskRouter }
