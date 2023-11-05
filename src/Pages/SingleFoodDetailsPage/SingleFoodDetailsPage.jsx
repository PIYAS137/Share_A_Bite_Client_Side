import { useState } from "react"
import { Link } from "react-router-dom"


const SingleFoodDetailsPage = () => {




  const [food_name, setFood_name] = useState('')
  const [food_img, setFood_img] = useState('')
  const [food_quantity, setFood_quantity] = useState('')
  const [pickup_location, setPickup_location] = useState('')
  const [expire_date, setExpire_date] = useState('')
  const [additional_info, setAdditional_info] = useState('')
  // const [donar_name,setDonar_name]=useState('')
  // const [donar_img,setDonar_img]=useState('')
  // const [donar_email,setDonar_email]=useState('')
  // const [food_status,setFood_Status]=useState('')

  const handleSubmitFood = (event) => {
    event.preventDefault()
    const newFood = { food_name, food_img, food_quantity, pickup_location, expire_date, additional_info }
    console.log(newFood);
  }




  return (
    <div className="h-screen  py-10">

      <div>
        <h1 className=" text-center text-3xl font-bold dark:text-white">Single Food View</h1>

        <div className="my-12 flex justify-center">
          <div className=" grid grid-cols-3 max-w-sm rounded-2xl overflow-hidden border border-red-300 gap-3 items-center">
            <div className=" col-span-1">
              <img className=" w-full" src="https://i.ibb.co/D542mtT/Rectangle-9.png" alt="" />
            </div>
            <div className="col-span-2 ml-5">
              <p className=" font-semibold">Donar Name</p>
              <p className=" font-semibold">Donar Loc</p>
            </div>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-10 pt-10 overflow-hidden">
          <div className="flex w-full justify-end">
            <img className=" max-w-full  rounded-lg " src='https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium' alt="" />
          </div>
          <div className=" flex flex-col justify-center space-y-3 items-start">
            <p className="font-semibold text-lg">Food name : </p>
            <p className="font-semibold text-lg">Food quantity : </p>
            <p className="font-semibold text-lg">Expire date/time : </p>




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
                          <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food name" className="input input-bordered" required />
                        </div>
                        <div className="form-control dark:text-black">
                          <label className="label">
                            <span className="label-text dark:text-black">Food Id</span>
                          </label>
                          <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food id" className="input input-bordered" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-control p-5 w-full h-full ">
                      <label className="label dark:text-black">
                        <span className="label-text dark:text-balck ">Food Image</span>
                      </label>
                      <img className=" rounded-xl" src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="" />
                    </div>
                  </div>

                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text dark:text-black">Expire Date</span>
                      </label>
                      <input onChange={e => setExpire_date(e.target.value)} value={expire_date} type="date" placeholder="expire date" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full md:ml-5">
                      <label className="label">
                        <span className="label-text dark:text-black">Pickup Location</span>
                      </label>
                      <input onChange={e => setPickup_location(e.target.value)} value={pickup_location} type="text" placeholder="pickup location" className="input input-bordered" required />
                    </div>

                  </div>
                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-black">Food Donar Name</span>
                      </label>
                      <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:ml-6">
                      <label className="label">
                        <span className="label-text dark:text-black">Food Donar Email</span>
                      </label>
                      <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food id" className="input input-bordered" required />
                    </div>
                  </div>

                  <div className=" flex flex-col md:flex-row justify-between dark:text-black">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-black">My Email</span>
                      </label>
                      <input onChange={e => setFood_name(e.target.value)} value={food_name} type="text" placeholder="food name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:ml-5">
                      <label className="label">
                        <span className="label-text dark:text-black">Req Date</span>
                      </label>
                      <input onChange={e => setFood_name(e.target.value)} value={food_name} type="date" placeholder="food id" className="input input-bordered w-full" required />
                    </div>
                  </div>

                  <div className="form-control w-full dark:text-black">
                    <label className="label">
                      <span className="label-text text-red-500 dark:text-black">Donate Money <span className=" font-bold">*</span></span>
                    </label>
                    <input onChange={e => setFood_name(e.target.value)} min={1} value={food_name}
                      type="number" placeholder="donation" className="input input-bordered w-full border-red-300" required />
                  </div>

                  <div className="form-control dark:text-black">
                    <label className="label">
                      <span className="label-text dark:text-black">Additional Information</span>
                    </label>
                    <textarea rows={3} onChange={e => setAdditional_info(e.target.value)} value={additional_info} type="text" placeholder="additional information" className="textarea input-bordered" required ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary"><Link to={'/foodreq'}>Submit Request</Link></button>
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