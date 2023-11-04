import { Link } from "react-router-dom"






const SingleCardFeaturedFood = ({data}) => {
    return (
        <div className="card bg-red-300 dark:bg-gray-800 shadow-xl overflow-hidden">
            <div className=" flex items-center justify-start space-x-2 px-4 py-3  w-full">
                <img className=" w-12 aspect-square object-cover rounded-full" src={data.donator_image} alt="" />
                <div className=" flex-1">
                <p className="font-semibold">{data.donator_name}</p>
                <p className=" text-xs -mt-1"> Pickup from: {data.pickup_location}</p>
                </div>
                <div>
                <p className="text-right font-bold">Quantity : {data.food_quantity}</p>
                <p className="text-right text-xs -mt-1">Expire : {data.expired_date}</p>
                </div>
            </div>
            <figure><img src={data.food_img} className="" alt="" /></figure>
            <div className="card-body py-5">
                <h2 className="card-title font-bold flex items-center">
                    {data.food_name}
                    <div className="badge ml-auto mt-1 badge-secondary">status</div>
                </h2>
                
                <p>{data.additional_node}</p>
                <div className="card-actions justify-center">
                    <Link to={'/singlefoodview'}><button className=" btn btn-primary btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCardFeaturedFood