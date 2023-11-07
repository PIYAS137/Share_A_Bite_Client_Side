import { useEffect, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"
import Swal from 'sweetalert2'

const UpdateFoodPage = () => {

    const loadedData = useLoaderData()
    const secureAxios = useAxiosSecure()
    const navigate = useNavigate()


    useEffect(() => {
        document.title = "Homepage | Manage My Food | Edit"
     }, []);


    const [food_name, setFood_name] = useState(loadedData.food_name)
    const [food_img, setFood_img] = useState(loadedData.food_img)
    const [food_quantity, setFood_quantity] = useState(loadedData.food_quantity)
    const [pickup_location, setPickup_location] = useState(loadedData.pickup_location)
    const [expire_date, setExpire_date] = useState(loadedData.expire_date)
    const [additional_info, setAdditional_info] = useState(loadedData.additional_info)
    const [updateFood_status, setUpdateFood_Status] = useState(loadedData.food_status)



    const handleSubmitFood = (event) => {
        event.preventDefault()
        const updatedFood = { food_name, food_img, food_quantity, pickup_location, expire_date, additional_info, updateFood_status }
        const url = `/updateFood/${loadedData._id}`


        Swal.fire({
            title: "Are you sure?",
            text: "You really want to update this?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, upadate it!"
        }).then((result) => {
            if (result.isConfirmed) {

                secureAxios.patch(url, updatedFood)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            navigate('/managefood')
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        })
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