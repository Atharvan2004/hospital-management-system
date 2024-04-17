import React, { useEffect, useState } from "react";
import "../styles/LayoutStyles.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import baseURL from "../../port";
 

const Layout = ({ children }) => {
  const { currentUser, loading, error } = useSelector((state) => state.doctor);
  const logoutUser = (event) => {
    if (event.target.textContent == "Logout") localStorage.setItem("token", "");
  };
  const DoctorMenu = [
    {
      name: "Logout",
      path: "/",
      icon: "fa-solid fa-sign-out",
      onClick: logoutUser,
    },
    {
      name: "Search Patients",
      path: "/search-patient",
      icon: "fa-solid fa-user-doctor",
    },
    {
      name: "Profile",
      path: `/doctor-profile/${currentUser._id}`,
      icon: "fa-solid fa-user",
    },
  ];
  const [appointments, setAppointments] = useState([]);


  const handleRemove= async(id)=>{
    try {
      const response = await axios.post(
        `${baseURL}/removeAppointment/${id}`,
        {
          token:localStorage.getItem("token"),
        }
      ).then(()=>{
        alert("Removed appointment")
        window.location.reload();
      });
    } catch (error) {
      console.error("error while removing ",error);
    }

  }



  useEffect(() => {
    console.log(currentUser);
    async function fetchData() {
      try {
        const response = await axios.post(
          `${baseURL}/viewAppointment`,
          {
            token: localStorage.getItem("token"),
          }
        );

        setAppointments(response.data.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }
    fetchData();
  }, []);


  const location = useLocation();

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="menu">
              {DoctorMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={menu.path} className={`menu-item`}>
                    <i className={menu.icon}></i>
                    <Link onClick={logoutUser} to={menu.path}>
                      {menu.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header shadow-none">
              <div className="flex gap-5 mb-0">
                <Typography variant="h2">Welcome</Typography>
                <div className="text-2xl ml-0 font-bold text-center text-gray-700">
                  <Typography variant="h2">{currentUser.name}</Typography>
                </div>
              </div>
            </div>
            <div className="flex">
              <Card className="mt-6 h-40 w-72 mr-8">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-10 ">
                    Salary
                  </Typography>
                  <Typography>{currentUser.salary} INR per month</Typography>
                </CardBody>
              </Card>
              <Card className="mt-6 h-40 w-72 mr-8">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-10 ">
                    Shift Timing
                  </Typography>
                  <Typography>{currentUser.shiftTiming}</Typography>
                </CardBody>
              </Card>
              <Card className="mt-6 h-40 w-72 mr-8">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-10 ">
                    Specialisation
                  </Typography>
                  <Typography>
                    {currentUser.specialisation} department
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-6 h-40 w-72 mr-8">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-10 ">
                    Treated Patients
                  </Typography>
                  <Typography>{currentUser.patientID.length}</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="flex">
              <div className="body shadow-none mt-8 mr-20">
                <Typography className="mb-3 ml-2" variant="h4">
                  Appointments
                </Typography>
                <Card className="w-96">
                  <List>
                    {appointments.map((appointment, index) => {
                      var date = new Date(appointment.date);
                      date = date.toLocaleDateString();
                      return (
                        <ListItem key={index}>
                          <ListItemPrefix>{index + 1}.</ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              {appointment.patientID.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Time: {appointment.time} Date: {date}
                            </Typography>
                          </div>
                          
                          <Button className="bg-brown-200 hover:bg-brown-600 ml-auto" onClick={() => handleRemove(appointment._id)}> Remove</Button>
                        </ListItem>
                        
                      );
                    })}
                  </List>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
