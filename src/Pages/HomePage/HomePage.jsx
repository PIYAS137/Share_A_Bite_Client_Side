import { useEffect } from "react";
import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood"
import Slider from "../../Components/Slider/Slider"

const HomePage = () => {

  useEffect(() => {
    document.title = "Homepage"
 }, []);

  return (
    <div className="">
        <Slider/>
        <FeaturedFood/>
    </div>
  )
}

export default HomePage