import axios from 'axios'

const API = axios.create({
    baseURL: Config.QUIZ_API_URL
})

export default API