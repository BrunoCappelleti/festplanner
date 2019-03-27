import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'


const loginUser = async (data) => {
  const { email, password } = data;
  const resp = await axios.post(``, {
    email,
    password
  });
  console.log(resp.data);
  return resp.data;
}

const registerUser = async (data) => {
  const { first_name, last_name, email, password } = data;
  const resp = await axios.post(``, {
    first_name,
    last_name,
    email,
    password
  });
  console.log(resp.data);
  return resp.data
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
  registerUser
}
