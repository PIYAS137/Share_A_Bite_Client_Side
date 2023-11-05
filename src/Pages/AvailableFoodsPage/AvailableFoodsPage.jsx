import { useEffect, useState } from "react"
import { foodarr } from "../../Components/FeaturedFood/FeaturedFood"
import SingleCardFeaturedFood from "../../Components/FeaturedFood/SingleCardFeaturedFood"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"


const AvailableFoodsPage = () => {
  const secureAxios = useAxiosSecure()

  const [datas,setDatas]=useState([])

  const url = '/getFoods';

  useEffect(()=>{
    secureAxios.get(url)
    .then(res=>setDatas(res.data))
  },[])
  console.log(datas);



  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10">Available Food </h1>
      <p className=" text-center pt-2 mb-10">Share your extra bites to everyone !</p>
      <div className="flex flex-wrap justify-around gap-10">
            {
                datas.map(one=><SingleCardFeaturedFood data={one} key={one._id}/>)
            }
        </div>
    </div>
  )
}

export default AvailableFoodsPage