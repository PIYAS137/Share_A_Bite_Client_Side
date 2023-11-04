import { foodarr as fakeData } from "../../Components/FeaturedFood/FeaturedFood";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

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



const ManageMyFoodsPage = () => {


  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => (
          <span className="status-span bg-red-500">asdf{row.original.status}</span>
        ),
      },
      {
        Header: "Food Name",
        accessor: "food_name",
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
      },
      {
        Header: "Pickup Location",
        accessor: "pickup_location",
      },
      {
        Header: "Expire Date",
        accessor: "expired_date",
      },
      {
        Header: "Actions",
        accessor: "",
        Cell: ({ row }) => (
          <div>
            <button className="btn btn-primary btn-sm" onClick={() => handleEdit(row)}>Edit</button>
            <button className="btn btn-error ml-2 btn-sm" onClick={() => handleDelete(row)}>Delete</button>
            <button className="btn btn-info ml-2 btn-sm" onClick={() => handleDelete(row)}><Link to='/managesinglefood'>Manage</Link></button>
          </div>
  )},
      
    ],
    []
  );
  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

















  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup,i) => (
              <tr className=" bg-red-400" key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column,i) => (
                  <th className="px-10 border" key={i} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
      
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row,i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell,i) => (
                    <td key={i} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageMyFoodsPage