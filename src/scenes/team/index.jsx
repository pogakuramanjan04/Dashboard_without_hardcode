import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react"
const Team = () => {
  const [users, setUsers] = useState([])

  const theme = useTheme();
  var ar
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        // setUsers(data)
        // console.log(data)
         ar=[]
        for (i of data) {
          // console.log(i.phone)
          let id=i.id
          let name=i.name
          let username=i.username
          let email=i.email
          let phone=i.phone
          var o = { 
            id: null,
            name:null,
            username:null,
            email:null,
            phone:null
        };
        o.id=id
        o.name=name
        o.username=username
        o.email=email
        o.phone=phone
        console.log(o)
        ar.push(o)
        setUsers(ar)
        }
        // console.log(ar)

      })
  }
  useEffect(() => {
    fetchUserData()
    // console.log(ar)
    
    }, [])



  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "username",
      headerName: "username",
      headerAlign: "left",
      align: "left"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1
    }
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`
          }
        }}
      >
    {users.length >0 && <DataGrid checkboxSelection rows={users} columns={columns} />}
      </Box>
    </Box>
  );
};

export default Team;
