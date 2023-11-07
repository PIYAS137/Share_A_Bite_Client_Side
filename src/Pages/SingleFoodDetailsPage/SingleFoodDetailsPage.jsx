import { useContext, useEffect, useState } from "react"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseAuthContext";
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure";
import Swal from 'sweetalert2'


const SingleFoodDetailsPage = () => {

  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const secureAxios = useAxiosSecure()
  const navigate = useNavigate()


  const [food_name, setFood_name] = useState(loadedData.food_name)
  const [food_img, setFood_img] = useState(loadedData.food_img)
  const [pickup_location, setPickup_location] = useState(loadedData.pickup_location)
  const [expire_date, setExpire_date] = useState(loadedData.expire_date)
  const [requestNote, setRequestNote] = useState('')
  const [donar_name, setDonar_name] = useState(loadedData.donar_name)
  const [donar_email, setDonar_email] = useState(loadedData.donar_email)
  const [additionalInfo, setAdditionalInfo] = useState(loadedData.additional_info)
  const [remainingTime, setRemainingTime] = useState('')
  const [donate_money, setDonate_money] = useState('')
  const [my_email, setMy_Email] = useState(user.email)

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedToday = `${year}-${month}-${day}`;

  const [request_date, setRequest_date] = useState(formattedToday)

  useEffect(() => {
    const currentDate = new Date();
    const expireDateArray = loadedData.expire_date.split('-');
    const expireDate = new Date(
      parseInt(expireDateArray[0]),
      parseInt(expireDateArray[1]) - 1,
      parseInt(expireDateArray[2])
    );
    const timeDifference = expireDate - currentDate;
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      setRemainingTime(`${days} days, ${hours} hours, ${minutes} minutes remaining.`)
    } else {
      setRemainingTime("Order has expired.")
    }
  }, [])





  const handleSubmitFood = (event) => {
    event.preventDefault()
    const newFood = {
      food_name,
      food_img,
      requester_email: user.email,
      requester_name: user.displayName,
      requester_img: user.photoURL,
      request_date,
      requestNote,
      donate_money,
      requset_food_id: loadedData._id,
      isDelevered: false,
      food_status: true,
      donar_name: loadedData.donar_name,
      donar_img: loadedData.donar_img,
      pickup_location:loadedData.pickup_location,
      food_expire_date:loadedData.expire_date
    }



    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, request!"
    }).then((result) => {
      if (result.isConfirmed) {

        const url = '/putReq'
        secureAxios.put(url, newFood)
          .then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Request Done!",
                text: "Your request has been recorded.",
                icon: "success"
              });
              navigate('/foodreq')
            }
            if (res.data == "Already Added") {
              Swal.fire({
                title: "Already Added!",
                text: "Your request is already done !",
                icon: "info"
              });
            }
          })



      }
    });
  }




  return (
    <div className="  py-10">

      <div className="">
        <h1 className=" text-center text-3xl font-bold dark:text-white">Single Food View</h1>

        <div className="my-12 flex justify-center">
          <div className=" grid grid-cols-3 max-w-xl rounded-2xl overflow-hidden border border-green-200 gap-3 items-center">
            <div className=" col-span-1">
              <img className=" w-full" src={loadedData.donar_img} alt="" />
            </div>
            <div className="col-span-2 px-5 ">
              <p className=" font-semibold">Donar Name : {loadedData?.donar_name ? loadedData.donar_name : "Default Donar"}</p>
              <p className=" font-semibold">Pickup Location : {loadedData.pickup_location}</p>
            </div>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-10 pt-10 overflow-hidden">
          <div className="flex w-full justify-center md:justify-end">
            <img className=" max-w-full max-h-[400px]  bg-red-500 rounded-lg " src={loadedData.food_img} alt="" />
          </div>
          <div className=" flex flex-col md:items-start justify-center space-y-3 items-center">
            <p className="font-semibold text-lg">Food name : {loadedData.food_name}</p>
            <p className="font-semibold text-lg">Food quantity : {loadedData.food_quantity} </p>
            <p className="font-semibold text-lg">Expire date : {loadedData.expire_date} </p>
            <p className="font-semibold text-lg">Expire time : {remainingTime} </p>
            <p className="font-semibold text-lg">Additional Info : {additionalInfo} </p>




            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn  btn-info ">Request for Food</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box">
                <form onSubmit={handleSubmitFood} method="dialog" className=" ">
                  {/* if there is a button in form, it will close the modal */}
                  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}

                  <h1 className=" text-center text-3xl font-bold dark:text-black">Request Food</h1>

                  <div className=" flex flex-col md:flex-row  items-center justify-between">
                    <div className=" w-full
                    ">
                      <div className=" w-full ">
                        <div className="form-control dark:text-black">
                          <label className="label ">
                            <span className="label-text dark:text-black">Food Name</span>
                          </label>
                          <input disabled onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food name" className="input input-bordered" required />
                        </div>
                        <div className="form-control dark:text-black">
                          <label className="label">
                            <span className="label-text dark:text-black">Food Id</span>
                          </label>
                          <input disabled defaultValue={loadedData._id} type="text" placeholder="food id" className="input input-bordered" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-control p-5 w-full h-full ">
                      <label className="label dark:text-black">
                        <span className="label-text dark:text-balck ">Food Image</span>
                      </label>
                      <img width={"150px"} className=" rounded-xl" src={loadedData.food_img} alt="" />
                    </div>
                  </div>

                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text dark:text-black">Request Date</span>
                      </label>
                      <input disabled onChange={e => setRequest_date(e.target.value)} defaultValue={request_date} type="date" placeholder="expire date" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full md:ml-5">
                      <label className="label">
                        <span className="label-text dark:text-black">Pickup Location</span>
                      </label>
                      <input disabled onChange={e => setPickup_location(e.target.value)} value={pickup_location} type="text" placeholder="pickup location" className="input input-bordered" required />
                    </div>

                  </div>
                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-black">Food Donar Name</span>
                      </label>
                      <input disabled onChange={e => setDonar_name(e.target.value)} value={donar_name} type="text" placeholder="food name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:ml-6">
                      <label className="label">
                        <span className="label-text dark:text-black">Food Donar Email</span>
                      </label>
                      <input disabled onChange={e => setDonar_email(e.target.value)} value={loadedData.donar_email} type="text" placeholder="food id" className="input input-bordered" required />
                    </div>
                  </div>

                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-black">My Email</span>
                      </label>
                      <input disabled onChange={e => setMy_Email(e.target.value)} value={my_email} type="text" placeholder="food name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:ml-5">
                      <label className="label">
                        <span className="label-text dark:text-black">Expire Date</span>
                      </label>
                      <input disabled onChange={e => setExpire_date(e.target.value)} value={expire_date} type="date" placeholder="food id" className="input input-bordered w-full" required />
                    </div>
                  </div>

                  <div className="form-control w-full dark:text-black">
                    <label className="label">
                      <span className="label-text text-red-500 dark:text-black">Donate Money <span className=" font-bold">*</span></span>
                    </label>
                    <input onChange={e => setDonate_money(e.target.value)} min={1} value={donate_money}
                      type="number" placeholder="$00.00" className="input input-bordered w-full border-red-300" required />
                  </div>

                  <div className="form-control dark:text-black">
                    <label className="label">
                      <span className="label-text dark:text-black">Request Note</span>
                    </label>
                    <textarea required rows={3} onChange={e => setRequestNote(e.target.value)} value={requestNote} type="text" placeholder="additional information" className="textarea input-bordered"  ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button onClick={handleSubmitFood} type="submit" className="btn btn-primary"><Link>Submit Request</Link></button>
                  </div>

                </form>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFoodDetailsPage