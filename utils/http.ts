import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com',
  // baseURL: 'http://localhost:3001',
})
