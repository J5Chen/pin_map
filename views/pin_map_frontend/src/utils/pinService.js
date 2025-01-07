import axios from 'axios'
const baseUrl = 'http://localhost:3000/pins'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPin => {
  const request = axios.post(baseUrl, newPin)
  return request.then(response => response.data)
}

export default { getAll, create, update }
