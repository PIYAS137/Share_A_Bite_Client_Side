import { foodarr } from "../../Components/FeaturedFood/FeaturedFood"
// {
//   "id": 1,
//   "food_name": "Fuck Him",
//   "food_img": "https://i.ibb.co/D542mtT/Rectangle-9.png",
//   "donator_name": "Piyas Mahamude Alif",
//   "donator_image": "https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg",
//   "food_quantity": 10,
//   "pickup_location": "Dhaka",
//   "expired_date": "12/11/12",
//   "additional_node": "The quick brown fox jumps over the lazy dog."
// },


const MyFoodRequestPage = () => {
  return (
    <div>
      <h1 className=" text-center text-3xl my-5 mb-10 font-bold dark:text-white">My Food Request</h1>
      <div className="overflow-x-auto">
        <table className="table border ">
          {/* head */}
          <thead>
            <tr>
              <th className=" dark:text-white">Food Image</th>
              <th className=" dark:text-white">Food Name</th>
              <th className=" dark:text-white">Donar Image</th>
              <th className=" dark:text-white">Donar Name</th>
              <th className=" dark:text-white">Pickup Location</th>
              <th className=" dark:text-white">Expire Date</th>
              <th className=" dark:text-white">Request Date</th>
              <th className=" dark:text-white">Status</th>
              <th className=" dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              foodarr.map(one => {
                return (
                  <tr key={one.id}>
                    <td>
                      <img className="w-12 aspect-square object-cover rounded-xl" src={one.food_img} alt="" />
                    </td>
                    <td>
                      {one.food_name}
                    </td>
                    <td>
                    <img className="w-12 aspect-square object-cover rounded-xl" src={one.donator_image} alt="" />
                    </td>
                    <td>{one.donator_name}</td>
                    
                    <td>{one.pickup_location}</td>
                    <td>{one.expired_date}</td>
                    <td>{one.expired_date}</td>
                    <td><span className=" text-green-700 font-bold">Available</span></td>
                    <th>
                      <button className="btn btn-error text-white btn-xs">Cancel</button>
                    </th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyFoodRequestPage