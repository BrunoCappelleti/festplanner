import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

const registerUser = async (data) => {
  try {
    const loginData = await axios.post(`${BASE_URL}/festivals/1/users`, data);
    // need to fix this to set local storage and create api
    return loginData.data
  } catch (e) {
    console.log(e);
  }
}

const loginUser = async (data) => {
  try {
    const loginData = await axios.post(`${BASE_URL}/festivals/1/users/login`, data);
    return loginData.data;
  } catch (e) {
    console.log(e);
    return false
  }
}

const getFestival = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/festivals/1`)
    return resp.data;
  } catch(e) {
    console.log(e);
    return false
  }
}

const getUserTasks = async (userId) => {
  try {
    const resp = await axios.get(`${BASE_URL}/festivals/1/users/${userId}/tasks`)
    return resp.data;
  } catch (e) {
    console.log(e);
    return false
  }
}

const createUserTask = async (userId, task) => {
  try {
    const resp = await axios.post(`${BASE_URL}/festivals/1/users/${userId}/tasks`, task)
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const editUserTask = async (userId, taskId, task) => {
  try {
    const resp = await axios.put(`${BASE_URL}/festivals/1/users/${userId}/tasks/${taskId}`, task);
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const deleteUserTask = async (userId, taskId) => {
  try {
    const resp = await axios.delete(`${BASE_URL}/festivals/1/users/${userId}/tasks/${taskId}`)
    return resp.data.message
  } catch(e) {
    console.log(e);
    return false
  }
}


export {
  registerUser,
  loginUser,
  getFestival,
  getUserTasks,
  createUserTask,
  editUserTask,
  deleteUserTask,
}
