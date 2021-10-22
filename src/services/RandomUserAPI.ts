import axios from 'axios'
// @ts-ignore
import { RANDOM_USER_URL } from 'react-native-dotenv'

const RandomUserAPI = axios.create({
    baseURL: RANDOM_USER_URL
})

export default RandomUserAPI