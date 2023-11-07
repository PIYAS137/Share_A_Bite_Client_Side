import { useContext, useState } from "react"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const AddFoodPage = () => {
  const secureAxios = useAxiosSecure()
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const [food_name, setFood_name] = useState('')
  const [food_img, setFood_img] = useState('')
  const [food_quantity, setFood_quantity] = useState('')
  const [pickup_location, setPickup_location] = useState('')
  const [expire_date, setExpire_date] = useState('')
  const [additional_info, setAdditional_info] = useState('')
  const [donar_name,setDonar_name]=useState(user.displayName)
  const [donar_img,setDonar_img]=useState(user.photoURL)
  const [donar_email,setDonar_email]=useState(user.email)
  const [food_status,setFood_Status]=useState(true)

  const urlForAddFood = '/addFood';


  const handleSubmitFood = (event) => {
    event.preventDefault()
    const newFood = { food_name, food_img, food_quantity, pickup_location, expire_date, additional_info,donar_name,donar_img,donar_email,food_status }
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Added it!'
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.post(urlForAddFood,newFood)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire(
              'Successfully Added!',
              'Your food has been added.',
              'success'
            )
            setFood_name('')
            setFood_img('')
            setFood_quantity('')
            setPickup_location('')
            setExpire_date('')
            setAdditional_info('')
            navigate('/availablefood')
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    })
    
    
    
    
    
    
    
    
    
    
  }

  // // --------------------------------<<<<<<<<Expire date colculation start here-----------
  // const currentDate = new Date()


  // const expireDateArray = expire_date.split('-');
  // const expireDate = new Date(
  //   parseInt(expireDateArray[0]),  // Year
  //   parseInt(expireDateArray[1]) - 1,  // Month (0-11)
  //   parseInt(expireDateArray[2])  // Day
  // );

  // // Calculate the time difference
  // const timeDifference = expireDate - currentDate;

  // if (timeDifference > 0) {
  //   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  //   console.log(`${days} days, ${hours} hours, ${minutes} minutes remaining.`);
  // } else {
  //   console.log("Order has expired.");
  // }
  // // --------------------------------<<<<<<<<Expire date colculation start here-----------




  return (
    <div className="  h-screen flex justify-center items-center">
      <form onSubmit={handleSubmitFood} className="card-body max-w-xl text-black">

        <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Add Your Extra Food</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Food Name</span>
          </label>
          <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Food Image URL</span>
          </label>
          <input onChange={e => setFood_img(e.target.value)} value={food_img} type="text" placeholder="food image" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Food Quantity</span>
          </label>
          <input onChange={e => setFood_quantity(e.target.value)} value={food_quantity} min={1} type="number" placeholder="food quantity" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Pickup Location</span>
          </label>
          <input onChange={e => setPickup_location(e.target.value)} value={pickup_location} type="text" placeholder="pickup location" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Expire Date</span>
          </label>
          <input onChange={e => setExpire_date(e.target.value)} value={expire_date} type="date" placeholder="expire date" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Additional Information</span>
          </label>
          <textarea rows={3} onChange={e => setAdditional_info(e.target.value)} value={additional_info} type="text" placeholder="additional information" className="textarea input-bordered" required ></textarea>
        </div>


        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Add Food</button>
        </div>
      </form>
    </div>
  )
}

export default AddFoodPage