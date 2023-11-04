import { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

  const handleSubmit=(event)=>{
    event.preventDefault()
  }
  
  return (
    <div className=" h-screen w-full justify-center flex items-center">
      <form onSubmit={handleSubmit} className="card-body max-w-xl text-black -mt-48">

        <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Log In Here</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <input onChange={e => setPass(e.target.value)} value={pass} type="text" placeholder="password" className="input input-bordered" required />
        </div>

        
        


        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary mb-3">Log In User</button>
          <button type="submit" className="btn btn-primary">Log In with Google</button>
        </div>
        <div>
          <p className=" dark:text-gray-400">Dont have an account? Go To <Link className=" font-semibold text-primary">Register Page</Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage