import { useEffect } from "react";
import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood"
import Slider from "../../Components/Slider/Slider"
import SecMarquee from "../../Components/Marquee/SecMarquee";
import GallerySection from "../../Components/GallerySection/GallerySection";


const HomePage = () => {

  useEffect(() => {
    document.title = "Homepage"
 }, []);

  return (
    <div className="">
        <Slider/>
        <FeaturedFood/>
        <GallerySection/>
        <SecMarquee/>
    </div>
  )
}

export default HomePage