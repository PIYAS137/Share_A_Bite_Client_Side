import { useContext, useEffect, useState } from "react"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import Swal from 'sweetalert2'




// const newFood = {
//   food_name,
//   food_img,
//   requester_email: user.email,
//   requester_name: user.displayName,
//   requester_img: user.photoURL,
//   request_date,
//   requestNote,
//   donate_money,
//   requset_food_id: loadedData._id,
//   isDelevered: false,
//   food_status: true,
//   donar_name: loadedData.donar_name,
//   donar_img: loadedData.donar_img,
//   pickup_location:loadedData.pickup_location,
//   food_expire_date:loadedData.expireDate
// }



const MyFoodRequestPage = () => {
  const { user } = useContext(AuthContext)
  const secureAxios = useAxiosSecure()
  const url = `/getUserReqFood?email=${user.email}`

  const [datas, setDatas] = useState([])


  useEffect(() => {
    secureAxios.get(url)
      .then(res => {
        setDatas(res.data)
      })
  }, [])


  const handleClickDeleteReq = (sid) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const url = `/reqDelete/${sid}`
        secureAxios.delete(url)
          .then(res => {
            if (res.data.deletedCount > 0) {
              const temp = datas.filter(one => one._id !== sid)
              setDatas(temp)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }











  return (
    <div className=" h-screen">
      <h1 className=" text-center text-3xl my-16 mb-10 font-bold dark:text-white">My Food Request</h1>
      <div className="overflow-x-auto">
        <table className="table  ">
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
              <th className=" dark:text-white">Donate Money</th>
              <th className=" dark:text-white">Status</th>
              <th className=" dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              datas.map(one => {
                return (
                  <tr key={one._id}>
                    <td>
                      <img className="w-12 aspect-square object-cover rounded-xl" src={one.food_img} alt="" />
                    </td>
                    <td>
                      {one.food_name}
                    </td>
                    <td>
                      <img className="w-12 aspect-square object-cover rounded-xl" src={one.donar_img} alt="" />
                    </td>
                    <td>{one.donar_name}</td>

                    <td>{one.pickup_location}</td>
                    <td>{one.food_expire_date}</td>
                    <td>{one.request_date}</td>
                    <td>${one.donate_money ? one.donate_money : "00.00"}</td>
                    <td>
                      {!one.isDelevered ?
                        <span className=" text-green-700 font-bold">Available</span>
                        :
                        <span className=" text-red-700 font-bold">Delevered</span>}
                    </td>
                    <th>
                      {
                        one.isDelevered ?
                          <button disabled className=" uppercase rounded-lg bg-red-400 opacity-30 text-white btn-xs">Cancel</button>
                          :
                          <button onClick={() => handleClickDeleteReq(one._id)} className="btn btn-error text-white btn-xs">Cancel</button>

                      }
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