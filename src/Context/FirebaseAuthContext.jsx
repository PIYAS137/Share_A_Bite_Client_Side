import { createContext, useEffect, useState } from "react"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/FirebaseConfig"
import axios from "axios"



export const AuthContext = createContext(null)
const FirebaseAuth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()


const FirebaseAuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const UserRegister = (email, pass) => {
        setLoader(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass)
    }
    const UserLogin = (email, pass) => {
        setLoader(true)
        console.log(email, pass);
        return signInWithEmailAndPassword(FirebaseAuth, email, pass)
    }
    const UserLogOut = () => {
        setLoader(true)
        return signOut(FirebaseAuth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(FirebaseAuth, (currentUser) => {
            setUser(currentUser)
            const userEmailForToken = { email: currentUser?.email || user?.email };
            if (currentUser) {
                axios.post('https://assignment-11-server-side-teal-phi.vercel.app/jwt', userEmailForToken, { withCredentials: true })
                    .then(res => {
                        console.log(res);
                        setLoader(false);
                    })
                    .catch(err => console.log(err))
            }
            else {
                axios.post('https://assignment-11-server-side-teal-phi.vercel.app/logOut', userEmailForToken, { withCredentials: true })
                    .then(res =>{
                        console.log(res);
                        setLoader(false);
                    })
                    .catch(err => console.log(err))
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const updateUser = (val, name, photo) => {
        setLoader(true)
        return updateProfile(val, {
            displayName: name,
            photoURL: photo
        })
    }
    const LoginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(FirebaseAuth, GoogleProvider)
    }



    const authInfo = {
        user,
        loader,
        LoginWithGoogle,
        updateUser,
        UserLogOut,
        UserLogin,
        UserRegister
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseAuthContext