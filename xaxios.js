const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

const createUser = async () => {
  try {
    const resp = await axios.post(`${BASE_URL}/festivals/1/users`, {
      user_first_name: 'Bruno',
      user_last_name: 'blah',
      user_email: 'bruno@gmail.com',
      password: 'pass'
    });
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};

const createTask = async () => {
  try {
    const resp = await axios.post(`${BASE_URL}/festivals/1/users/2/tasks`, {
      task_title: 'I need to chill',
      task_date: 123456890,
      task_notes: 'Maybe I can take a nice bubble bath, and relax',
      task_status: 'To-do',
    })
    console.log(resp.data);
  } catch (e) {
    return 'failure';
    console.log(e);
  }
};

const getUserTasks = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/festivals/1/users/2/tasks`)
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteTask = async () => {
  try {
    const resp = await axios.delete(`${BASE_URL}/festivals/1/users/2/tasks/1`)
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};

const updateTask = async () => {
  try {
    const resp = await axios.put(`${BASE_URL}/festivals/1/users/2/tasks/3`, {
      task_title: 'I need to GOOOOOOOOO',
      task_date: 123456890,
      task_notes: 'Maybe I can take a nice bubble bath, and relax',
      task_status: 'To-do',
    })
    console.log(resp.data);
  } catch (e) {
    return 'failure';
    console.log(e);
  }
};

updateTask();
