import { Link } from "react-router-dom"






const SingleCardFeaturedFood = ({data}) => {
    return (
        <div className="card bg-red-300 w-[400px] dark:bg-gray-800 shadow-xl overflow-hidden">
            <div className=" flex items-center justify-start space-x-2 px-4 py-3  w-full">
                <img className=" w-12 aspect-square object-cover rounded-full" src={data.donar_img} alt="" />
                <div className=" flex-1">
                <p className="font-semibold">{data.donar_name}</p>
                <p className=" text-xs -mt-1"> Pickup from <br /> {data.pickup_location}</p>
                </div>
                <div>
                <p className="text-right font-bold">Quantity : {data.food_quantity}</p>
                <p className="text-right text-xs -mt-1">Expire : {data.expire_date}</p>
                </div>
            </div>
            <figure><img src={data.food_img} className=" max-h-[400px] w-full object-cover" alt="" /></figure>
            <div className="card-body py-5">
                <h2 className="card-title font-bold flex items-center">
                    <div className="">{data.food_name}</div>
                    
                    {
                        data.food_status == "available" ?<div className=" ml-auto -mb-3 text-xs bg-green-700 px-2 py-1 rounded-xl">{data.food_status}</div> : <div className="badge ml-auto -mb-3 badge-secondary">{data.food_status}</div>
                    }
                </h2>
                
                <p className=" text-sm italic">{data.additional_info}</p>
                <div className="card-actions justify-center">
                    <Link to={'/singlefoodview'}><button className=" btn btn-primary btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCardFeaturedFood