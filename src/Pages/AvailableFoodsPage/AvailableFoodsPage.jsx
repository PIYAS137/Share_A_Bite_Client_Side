import { foodarr } from "../../Components/FeaturedFood/FeaturedFood"
import SingleCardFeaturedFood from "../../Components/FeaturedFood/SingleCardFeaturedFood"


const AvailableFoodsPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-3">Available Food </h1>
      <p className=" text-center pt-2 mb-10">Share your extra bites to everyone !</p>
      <div className=" grid grid-cols-3 gap-10">
            {
                foodarr.map(one=><SingleCardFeaturedFood data={one} key={one.id}/>)
            }
        </div>
    </div>
  )
}

export default AvailableFoodsPage