import { useEffect, useState } from "react"
import SectionHeading from "../SectionHeading/SectionHeading"
import SingleCardFeaturedFood from "./SingleCardFeaturedFood"
import { Link } from 'react-router-dom'
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"


const FeaturedFood = () => {

  const [datas, setDatas] = useState([])
  const secureAxios = useAxiosSecure()
  const url = `/featuredSecFood`

  useEffect(() => {
    secureAxios.get(url)
      .then(res =>{
        setDatas(res?.data)
      })
  }, [])



  return (
    <>
      <SectionHeading big={"Featured Food"} small={"Share a bite with us !"} />
      <div className="flex flex-wrap justify-around gap-10">
        {
          datas?.slice(2, 8).map(one => <SingleCardFeaturedFood data={one} key={one._id} />)
        }
      </div>
      <div className=" mt-10 flex justify-center">
        <Link to="/availablefood"><button className=" btn btn-primary">Show All Foods</button></Link>
      </div>
    </>

  )
}

export default FeaturedFood