import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTasks = async () => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  return resp.data;
  }

const delTask = async (id) => {
  const resp = await axios.delete(`${BASE_URL}/${id}`)
  return resp.data
}

const postTask = async (title) => {
  const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
  return resp.data
}


export {
  getTasks,
  delTask,
  postTask
}
