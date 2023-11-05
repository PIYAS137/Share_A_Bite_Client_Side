import { foodarr } from "../../Components/FeaturedFood/FeaturedFood"


const ManageSingleFoodPage = () => {
  return (
    <div className=" h-screen">
      <div className="overflow-x-scroll md:overflow-hidden">
      <h1 className=" text-center text-3xl my-10 mb-10 font-bold dark:text-white">Manage Single Food Page</h1>
      <table className="table w-full overflow-x-scroll">
          {/* head */}
          <thead>
            <tr>
              <th className=" dark:text-white">Donar Image</th>
              <th className=" dark:text-white">Donar Name</th>
              <th className=" dark:text-white">Donar Email</th>
              <th className=" dark:text-white">Pickup Location</th>
              <th className=" dark:text-white">Request Date & Time</th>
              <th className=" dark:text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              foodarr.map(one => {
                return (
                  <tr key={one.id}>
                    <td>
                    <img className="w-12 aspect-square object-cover rounded-xl" src={one.donator_image} alt="" />
                    </td>
                    <td>
                      {one.food_name}
                    </td>
                    <td>
                    piyas@gmail.com
                    </td>
                    <td>pickup Location</td>
                    
                    <td>Req time + date</td>
                    <td>
                      <span className=" text-green-700 font-bold">Available</span> :
                      <button className="btn btn-error text-white btn-xs">Cancel</button>
                      </td>
                    
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

export default ManageSingleFoodPage