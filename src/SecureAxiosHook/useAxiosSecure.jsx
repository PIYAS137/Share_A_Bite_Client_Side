import axios from 'axios'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/FirebaseAuthContext'
import { useNavigate } from 'react-router-dom'

const secureAxios = axios.create({
    baseURL: 'http://localhost:5020',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {UserLogOut} = useContext(AuthContext)

    const navigate = useNavigate()
    useEffect(() => {
        secureAxios.interceptors.response.use(res => {
            return res
        }, err => {
            if (err.response.status === 401 || err.response.status === 403) {
                UserLogOut()
                    .then(res => {
                        navigate('/login')
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })
            }
        })
    }, [])





   return secureAxios
}

export default useAxiosSecure