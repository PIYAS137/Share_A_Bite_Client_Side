import { useLoaderData } from "react-router-dom"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"
import Swal from 'sweetalert2'
import { useState } from "react"



const ManageSingleFoodPage = () => {


  const loadedData = useLoaderData()
  const [datas, setDatas] = useState(loadedData)
  const secureAxios = useAxiosSecure()

  const handleDelevered = (val) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const url = `/deleverFood/${val._id}`
        const delv = { isDelevered: true,requset_food_id : val.requset_food_id }
        secureAxios.patch(url, delv)
          .then(res => {
            if (res.data.deletedCount > 0) {
              const exceptOne = datas.find(one => one._id === val._id)
              const remainAll = datas.filter(one => one._id !== val._id)
              exceptOne.isDelevered = true;
              // console.log(exceptOne);
              const tempArr = [exceptOne, ...remainAll]
              setDatas(tempArr)
              Swal.fire({
                title: "Delevered!",
                text: "Your record has been updated.",
                icon: "success"
              });
            }
          })
          .catch(err => console.log(err))
      }
    });

  }


  return (
    <div className=" h-screen">
      <div className="overflow-x-scroll md:overflow-hidden">
        <h1 className=" text-center text-3xl my-10 mb-10 font-bold dark:text-white">Manage Single Food Page</h1>
        <p className=" text-center py-10 text-purple-600">Requests for this food | Food ID :123123123</p>

        {
          datas.length === 0 && <p className=" text-center bg-red-500 max-w-xl mx-auto rounded-xl
         py-3 font-bold">No one request for this food !</p>
        }

        {
          datas.length > 0 && <table className="table w-full overflow-x-scroll">
            <thead>
              <tr className="bg-red-200 dark:bg-red-900">
                <th className=" dark:text-white">Requester Image</th>
                <th className=" dark:text-white">Requester Name</th>
                <th className=" dark:text-white">Requester Email</th>
                <th className=" dark:text-white">Donate</th>
                <th className=" dark:text-white">Request Date</th>
                <th className=" dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                datas?.map(one => {
                  return (
                    <tr key={one._id}>
                      <td>
                        <img className="w-12 aspect-square object-cover rounded-xl" src={one.requester_img} alt="" />
                      </td>
                      <td>
                        {one.requester_name}
                      </td>
                      <td>
                        {one.requester_email}
                      </td>
                      <td>$
                        {one?.donate_money ? one?.donate_money : "00"}
                      </td>
                      <td>
                        {one.request_date}
                      </td>

                      <td>
                        {
                          one.isDelevered ?
                            <button disabled className=" text-green-500  font-semibold">Delevered</button>
                            :
                            <button onClick={() => handleDelevered(one)} className="btn btn-error text-white btn-xs">Pending</button>
                        }
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default ManageSingleFoodPage