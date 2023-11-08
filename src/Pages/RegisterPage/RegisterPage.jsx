import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from 'sweetalert2'


const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
const capitalLetterRegex = /[A-Z]/;

const RegisterPage = () => {

  const { updateUser, UserRegister } = useContext(AuthContext)
  const location = useLocation()


  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setErr(null)

    if (pass.length <= 6) {
      setErr("Your password length should be up to 6 character");
      return
    }
    else if (!specialCharRegex.test(pass)) {
      setErr("Your password have minimum one Special Character")
      return
    } else if (!capitalLetterRegex.test(pass)) {
      setErr("Your password have minimum one Capital Character !")
      return
    }

    // const newUser = { email, pass, name, profile }
    // console.log(newUser);
    UserRegister(email, pass)
      .then(res => {

        console.log(res);

        updateUser(res.user, name, photo)
          .then(res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully Registered User',
              showConfirmButton: false,
              timer: 1500
            })
            setName('')
            setEmail('')
            setPass('')
            setPhoto('')
            console.log(res);
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
            console.log(error);
          })

        console.log(res);
        // console.log(res);
        // updateUser(res.user, name, photo)
        //     .then(res => {
        //         // implement backend code------------------<<<<<<
        //         const SendUser = { name, email, profile }
        //         axios.post('https://assignment-11-server-side-teal-phi.vercel.app/users', SendUser)
        //             .then(res => {
        //                 if (res.data.insertedId) {
        //                     Swal.fire({
        //                         position: 'top-end',
        //                         icon: 'success',
        //                         title: 'Successfully Registered User',
        //                         showConfirmButton: false,
        //                         timer: 1500
        //                     })
        //                     setName('')
        //                     setEmail('')
        //                     setPass('')
        //                     setProfile('')
        //                     navigate('/')
        //                 }
        //             })
        //         // implement backend code------------------<<<<<<
        //     }).catch(error => {
        //         setErr(error.message)
        //         console.log(error);
        //     })
      }).catch(error => {
        setErr(error.message)
        console.log(error);
      })
  }







  return (
    <div className=" h-screen w-full justify-center flex items-center">
      <form onSubmit={handleSubmit} className="card-body max-w-xl text-black -mt-48">

        <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Register Here</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Name</span>
          </label>
          <input name="name" onChange={e => setName(e.target.value)} value={name} type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Email</span>
          </label>
          <input name="email" onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Photo URL</span>
          </label>
          <input name="photo" onChange={e => setPhoto(e.target.value)} value={photo} type="text" placeholder="photo url" className="input input-bordered" required />
        </div>





        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary mb-3">Register In User</button>
        </div>
        <div>
          {err && <p className=" text-red-500 font-semibold italic">{err}</p>}
          <p className=" dark:text-gray-400">Already have an account? Go To <Link to={'/login'} className=" font-semibold text-primary">Login Page</Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage