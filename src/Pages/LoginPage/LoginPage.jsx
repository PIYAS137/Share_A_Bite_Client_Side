import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import Swal from 'sweetalert2'

const LoginPage = () => {
  const {UserLogin} = useContext(AuthContext)

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [err,setErr]=useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit=(event)=>{
    event.preventDefault()
    setErr('')


        UserLogin(email, pass)
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Login User',
                    showConfirmButton: false,
                    timer: 1500
                })
                setEmail('')
                setPass('')
                navigate(location?.state ? location.state : '/')
            }).catch(error => {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Login Faild",
                showConfirmButton: false,
                timer: 1500
              })
                setErr(error.message)
                
            })
  }
  
  return (
    <div className=" h-screen w-full justify-center flex items-center">
      <form onSubmit={handleSubmit} className="card-body max-w-xl text-black -mt-48">

        <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Log In Here</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} name="email" type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="password" className="input input-bordered" required />
        </div>

        
        


        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary mb-3">Log In User</button>
          <button type="submit" className="btn btn-primary">Log In with Google</button>
        </div>
        <div>
          {err && <p className=" text-red-500 font-semibold italic">{err}</p>}
          <p className=" dark:text-gray-400">Dont have an account? Go To <Link state={location.state} to={'/register'} className=" font-semibold text-primary">Register Page</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage