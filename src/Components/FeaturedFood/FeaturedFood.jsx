import SectionHeading from "../SectionHeading/SectionHeading"
import SingleCardFeaturedFood from "./SingleCardFeaturedFood"
import {Link} from 'react-router-dom'

export const foodarr=[
    {
      "id": 1,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    },
    {
      "id": 2,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    },
    {
      "id": 3,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    },
    {
      "id": 4,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    },
    {
      "id": 5,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    },
    {
      "id": 6,
      "food_name": "Love Him",
      "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
      "donator_name": "Piyas Mahamude Alif",
      "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
      "food_quantity": 10,
      "pickup_location": "Dhaka",
      "expired_date": "12/11/12",
      "additional_node": "The quick brown fox jumps over the lazy dog."
    }
  ]
  

const FeaturedFood = () => {
  return (
    <>
        <SectionHeading big={"Featured Food"} small={"Share a bite with us !"}/>
        <div className=" grid grid-cols-3 gap-10">
            {
                foodarr.map(one=><SingleCardFeaturedFood data={one} key={one.id}/>)
            }
        </div>
        <div className=" mt-10 flex justify-center">
            <Link to="/availablefood"><button className=" btn btn-primary">Show All Foods</button></Link>
        </div>
    </>
    
  )
}

export default FeaturedFood