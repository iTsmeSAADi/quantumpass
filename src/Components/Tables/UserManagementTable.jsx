// import React from "react";
// import { tableData, usertableData } from "../../Config/TableData";
// import {AiFillCopy} from 'react-icons/ai'
// import {FaCopy} from 'react-icons/fa'
// import UserManagement from "../../Pages/QuantumPages/UserManagement";



// const UserManagementTable = () => {
//   return (
//     <div>
//       <table className="w-full mt-12  ">
//         <tr className="">
//           <th>User Id</th>
//           <th>Email</th>
//           <th>Roles</th>

//           <th>Companies</th>
          
//         </tr>
      
//          {
//             usertableData.map((items,index)=>(
//                 <tr style={{ marginTop: "" }}  className="text-center mt-12 h-11    rounded-md text-sm  shadow border-b">
//                 <td >{items.userId}</td>
//                 {/* <FaCopy/> */}
//           <td className=" mt-12">{items.email}</td>
//           <td>{items.roles}</td>
//           <td>{items.company}</td>
//           {/* <td>{items.company}</td> */}

         



//           </tr>
//             ))
//          }
      
       
//       </table>
//     </div>
//   );
// };

// export default UserManagementTable;
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { AiFillCopy } from "react-icons/ai";
import axios from "axios";

const columns = [
  { id: "name", label: "User Id", minWidth: 170 },
  { id: "code", label: "Email", minWidth: 100 },
  {
    id: "population",
    label: "Role",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Company",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
 
 
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd-dedwed", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-dwedew34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
  createData("dwewee-cdfwef-34rsd", "hazratzahid11@gmail.com", 'Company', "Swiss AMP AFG"),
];

function UserManagementTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const mytoken = user.token;
  console.log("my Token is :::::::::::::",mytoken)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/company/users`,{
        headers: {
          "token": mytoken,
        }
        });
        setData(response.data);
        console.log("get user.............",response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ border: "none" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    borderBottom: "1px solid ",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" className="border mt-2 rounded-lg" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className=" "
                          // style={{ border: "0px solid" }}
                        >
                          {column.id === "name" || column.id === "code" ? (
                            <span className="flex text-[#173563] items-center gap-x-2">
                              <AiFillCopy size={17} /> {value}
                            </span>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default UserManagementTable;
