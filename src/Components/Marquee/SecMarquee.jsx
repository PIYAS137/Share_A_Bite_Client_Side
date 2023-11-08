import Marquee from "react-fast-marquee";
import SectionHeading from '../SectionHeading/SectionHeading'
import SingleCardMarquee from "./SingleCardMarquee";

function SecMarquee() {

  const donarArr=[
    {
      id:1,
      name:"Himel Hossain",
      img : "https://i.ibb.co/PDnJ0ny/Screenshot-8.png",
    },
    {
      id:2,
      name:"Rafee Rawshonee",
      img : "https://i.ibb.co/K5Krx1K/IMG-6035.jpg",
    },
    {
      id:3,
      name:"Osman Faruk",
      img : "https://i.ibb.co/MCs5Sg8/Whats-App-Image-2023-05-25-at-21-30-48.jpg",
    },
    {
      id:4,
      name:"Rafee Rawshonee",
      img : "https://i.ibb.co/K5Krx1K/IMG-6035.jpg",
    },
    {
      id:5,
      name:"Osman Faruk",
      img : "https://i.ibb.co/MCs5Sg8/Whats-App-Image-2023-05-25-at-21-30-48.jpg",
    }
    
  ]


  return (
    <div className=" container ">
        <SectionHeading big={"Our Top Donars"} small={"Come and work with us !"}/>
        <Marquee>
          {
            donarArr.map((one)=><SingleCardMarquee key={one.id} data={one}/>)
          }
        </Marquee>
    </div>
  )
}

export default SecMarquee