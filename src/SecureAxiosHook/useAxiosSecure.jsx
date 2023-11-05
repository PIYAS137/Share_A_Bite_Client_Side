import axios from 'axios'

const secureAxios = axios.create({
    baseURL: 'http://localhost:5020',
    withCredentials:true
})

const useAxiosSecure = () => {
   return secureAxios
}

export default useAxiosSecure