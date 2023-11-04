import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }







  return (
    <div className=" h-screen w-full justify-center flex items-center">
      <form onSubmit={handleSubmit} className="card-body max-w-xl text-black -mt-48">

        <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Register Here</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Name</span>
          </label>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="name" className="input input-bordered" required />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Photo URL</span>
          </label>
          <input onChange={e => setPhoto(e.target.value)} value={photo} type="text" placeholder="photo url" className="input input-bordered" required />
        </div>





        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary mb-3">Register In User</button>
        </div>
        <div>
          <p className=" dark:text-gray-400">Already have an account? Go To <Link to={'/login'} className=" font-semibold text-primary">Login Page</Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage