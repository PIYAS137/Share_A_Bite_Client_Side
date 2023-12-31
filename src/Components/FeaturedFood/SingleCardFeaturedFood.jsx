import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useMotionValue, motion, useTransform } from 'framer-motion'




const SingleCardFeaturedFood = ({ data }) => {


    const [remainingTime, setRemainingTime] = useState('')

    useEffect(() => {
        const currentDate = new Date();
        const expireDateArray = data?.expire_date?.split('-');
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
            setRemainingTime(`${days}d : ${hours}h : ${minutes}m`)
        } else {
            setRemainingTime("Food has expired")
        }
    }, [])


    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [100, -100], [-30, 30])

    return (
        <div style={{ perspective: 2000 }}>
            <motion.div style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="card cursor-grab bg-red-300 w-[400px] dark:bg-gray-800 shadow-xl overflow-hidden">
                <div className=" flex items-center justify-start space-x-2 px-4 py-3  w-full">
                    <img draggable='false' className=" w-12 aspect-square object-cover rounded-full" src={data.donar_img} alt="" />
                    <div className=" flex-1">
                        <p className="font-semibold">{data.donar_name}</p>
                        <p className=" text-xs -mt-1"> Pickup from <br /> {data.pickup_location}</p>
                    </div>
                    <div>
                        <p className="text-right font-bold">Quantity : {data.food_quantity}</p>
                        <p className="text-right text-xs -mt-1">Expire : {data.expire_date}</p>
                    </div>
                </div>
                <motion.div style={{ x, y, rotateX, rotateY, z: 100000 }}>
                    <figure>
                        <img src={data.food_img} draggable='false' className=" max-h-[400px] w-full object-cover" alt="" />
                    </figure>
                </motion.div>
                <div className="card-body py-5">
                    <h2 className="card-title font-bold flex items-center">
                        <div className="">{data.food_name}</div>
                        {
                            remainingTime === "Food has expired" ?
                                <div className=" ml-auto -mb-3 text-xs bg-red-700 px-2 text-white py-1 rounded-xl">{remainingTime}</div>
                                :
                                <div className=" ml-auto -mb-3 text-xs bg-green-700 px-2 text-white py-1 rounded-xl">{remainingTime}</div>
                        }
                    </h2>
                    <p className=" text-sm italic">{data.additional_info}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/singlefoodview/${data._id}`}><button className=" btn btn-primary btn-outline">View Details</button></Link>
                    </div>
                </div>
            </motion.div>

        </div >
    )
}

export default SingleCardFeaturedFood