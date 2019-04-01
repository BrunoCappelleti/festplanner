import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('FestPlannerToken')}`
  }
});

const updateToken = (token) => {
  localStorage.setItem('beatHostRToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`
}

const registerUser = async (data) => {
  try {
    const loginData = await api.post(`${BASE_URL}/festivals/1/users`, data);
    updateToken(loginData.data.token);
    return loginData.data
  } catch (e) {
    console.log(e);
  }
}

const loginUser = async (data) => {
  try {
    const loginData = await api.post(`${BASE_URL}/festivals/1/users/login`, data);
    updateToken(loginData.data.token);
    return loginData.data;
  } catch (e) {
    console.log(e);
    return false
  }
}

const getFestival = async () => {
  try {
    const resp = await api.get(`${BASE_URL}/festivals/1`)
    return resp.data;
  } catch(e) {
    console.log(e);
    return false
  }
}

const getUserTasks = async (userId) => {
  try {
    const resp = await api.get(`${BASE_URL}/festivals/1/users/${userId}/tasks`)
    return resp.data;
  } catch (e) {
    console.log(e);
    return false
  }
}

const createUserTask = async (userId, task) => {
  try {
    const resp = await api.post(`${BASE_URL}/festivals/1/users/${userId}/tasks`, task)
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const editUserTask = async (userId, taskId, task) => {
  try {
    const resp = await api.put(`${BASE_URL}/festivals/1/users/${userId}/tasks/${taskId}`, task);
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const deleteUserTask = async (userId, taskId) => {
  try {
    const resp = await api.delete(`${BASE_URL}/festivals/1/users/${userId}/tasks/${taskId}`)
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
