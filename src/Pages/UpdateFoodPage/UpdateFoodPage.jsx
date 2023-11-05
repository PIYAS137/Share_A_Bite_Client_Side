import { useState } from "react"

const UpdateFoodPage = () => {


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
        <div className="  h-screen flex justify-center items-center">
            <form onSubmit={handleSubmitFood} className="card-body max-w-xl text-black">

                <h1 className=" text-center text-3xl mb-5 font-bold dark:text-white">Update A Food</h1>

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
                    <button type="submit" className="btn btn-primary">Update Food</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateFoodPage