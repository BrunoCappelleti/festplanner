import axios from 'axios';

const BASE_URL = 'http://localhost:5000'


const loginUser = async (data) => {
  const { user_email, password } = data;
  const resp = await axios.post(`${BASE_URL}/users/login`, {
    user_email,
    password
  });
  console.log(resp.data);
  return resp.data;
}

const registerUser = async (data) => {
  const { user_first_name, user_last_name, user_email, password } = data;
  const resp = await axios.post(`${BASE_URL}/festivals/1/users`, {
    user_first_name,
    user_last_name,
    user_email,
    password
  });
  console.log(resp.data);
  return resp.data
}

const getFestival = async () => {
  const resp = await axios.get(`${BASE_URL}/festivals`)
  console.log(resp.data.festivals[0].festival_date);
  return resp.data.festivals[0];
  }

const getTasks = async () => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  return resp.data;
  }

const delTask = async (id) => {
  const resp = await axios.delete(`${BASE_URL}/${id}`)
  return resp.data
}

const postTask = async (title) => {
  const resp = await axios.post(`${BASE_URL}`, {
    title,
    completed: false
  })
  return resp.data
}


export {
  getTasks,
  delTask,
  postTask,
  loginUser,
  registerUser,
  getFestival
}
