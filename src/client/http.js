import axios from 'axios'

const API = axios.create({
    baseURL: process.env.QUIZ_API_URL
})

export default API