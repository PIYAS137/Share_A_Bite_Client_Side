import { useContext } from "react"
import { AuthContext } from "../Context/FirebaseAuthContext"
import { Navigate, useLocation } from "react-router-dom"
import Lottie from 'lottie-react'
import LoaderGif from '../Assets/LoadingAnimation.json'

const PrivateRoute = ({children}) => {

    const {user,loader}=useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div className=" flex justify-center items-center h-screen overflow-hidden">
           <Lottie animationData={LoaderGif}></Lottie>
        </div>
    }
    if(user){
        return children
    }


  return <Navigate  state={location.pathname} to={'/login'}/>
}

export default PrivateRoute