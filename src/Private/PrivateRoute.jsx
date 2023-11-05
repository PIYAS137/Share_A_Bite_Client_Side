import { useContext } from "react"
import { AuthContext } from "../Context/FirebaseAuthContext"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {

    const {user,loader}=useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loader){
        return <div>
            lottifie icon with spinner
        </div>
    }
    if(user){
        return children
    }


  return <Navigate  state={location.pathname} to={'/login'}/>
}

export default PrivateRoute