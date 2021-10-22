import axios from 'axios'

const RandomUserAPI = axios.create({
    baseURL: 'https://randomuser.me/api'
})

export default RandomUserAPI