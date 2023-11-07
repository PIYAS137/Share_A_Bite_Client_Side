import * as React from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from 'sweetalert2'



const ManageMyFoodsPage = () => {


  const { user } = React.useContext(AuthContext)
  const [datas, setDatas] = React.useState([])
  const secureAxios = useAxiosSecure()
  const url = `/myaddedFoods?email=${user.email}`

  React.useEffect(() => {
    secureAxios.get(url)
      .then(res => {
        setDatas(res.data)
      })
  }, [datas])

  React.useEffect(() => {
    document.title = "Homepage | Manage My Food"
 }, []);

  const handleDelete = (val) => {


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

        const foodId = val.original._id
        const url = `/manageDelete/${foodId}`
        secureAxios.delete(url)
          .then(res => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              console.log(datas);
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

  const data = React.useMemo(() => {
    return datas?.map((item, index) => ({
      ...item,
      slNo: index + 1,
    }));
  }, [datas]);

  const columns = React.useMemo(
    () => [
      {
        Header: "SL No",
        accessor: "slNo",
      },
      {
        Header: "Food Name",
        accessor: "food_name",
        sortType: "basic",
      },
      {
        Header: "Food Image",
        accessor: "food_img",
        Cell: ({ row }) => (
          <img
            src={row.original.food_img}
            alt={row.original.food_name}
            width="50"
            height="50"
          />
        ),
      },
      {
        Header: "Food Quantity",
        accessor: "food_quantity",
        sortType: "basic",
      },
      {
        Header: "Pickup Location",
        accessor: "pickup_location",
        sortType: "basic",
      },
      {
        Header: "Expire Date",
        accessor: "expire_date",
        sortType: "basic",
      },
      {
        Header: "Actions",
        accessor: "",
        Cell: ({ row }) => (
          <div className="flex flex-col xl:flex-row">
            <button
              className="btn btn-primary btn-sm"
            >
              <Link to={`/updatefood/${row.original._id}`}>Edit</Link>
            </button>
            <button
              className="btn btn-error xl:ml-2 btn-sm"
              onClick={() => handleDelete(row)}
            >
              Delete
            </button>
            <button
              className="btn btn-info xl:ml-2 btn-sm"
            >
              <Link to={`/managesinglefood/${row.original._id}`}>Manage</Link>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="App overflow-x-scroll xl:overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center">
        <h1 className="text-center text-3xl my-16 mb-10 font-bold dark:text-white">
          Manage My Foods <br /><sub className="text-xs">[ React-Table , I try my best ]</sub>
        </h1>

        {
          datas.length == 0 && 
          <p className=" text-center bg-red-500 max-w-xl mx-auto rounded-xl
         p-3 font-bold">You added no food</p>
        }
        
        {
          datas.length > 0 && 
          <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr className=" " key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    className="px-10 border"
                    key={i}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr className=" border" key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => (
                    <td className="text-center" key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        }

      </div>
    </div>
  );
};

export default ManageMyFoodsPage;
