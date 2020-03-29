import axios from 'axios'

const instance = axios.create({
    baseURL: "https://udemy-burger-75d1f.firebaseio.com/"

})

export default instance