import React, { useEffect, useState } from "react";
import "../styles/LayoutStyles.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import  TableMedicine  from "./Table";
import baseURL from "../../port";

const SLayout = ({ children }) => {
  const { currentUser, loading, error } = useSelector((state) => state.staff);
  const logoutUser = (event) => {
    if (event.target.textContent == "Logout") localStorage.setItem("token", "");
  };
  const DoctorMenu = [
    {
      name: "Logout",
      path: "/",
      icon: "fa-solid fa-house",
      onClick: logoutUser,
    },
    {
      name: "Search Patients",
      path: "/search-patient",
      icon: "fa-solid fa-user-doctor",
    },
    {
      name: "Profile",
      path: `/staff-profile/${currentUser._id}`,
      icon: "fa-solid fa-user",
    },
    {
        name: "Add Medicine",
        path: `/add-medicine `,
        icon: "fa-solid fa-plus",
    },
  ];
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    console.log(currentUser);
    async function fetchData() {
      try {
        const response = await axios.post(
          `${baseURL}/getMedicine`,
          {
            token: localStorage.getItem("token"),
          }
        );
        console.log(response.data.data)
        setMedicine(response.data.data);
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
          <div className="sidebar h-lvh">
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
                  <Typography>{currentUser.shiftTimings}</Typography>
                </CardBody>
              </Card>
              {/* <Card className="mt-6 h-40 w-72 mr-8">
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
              </Card> */}
            </div>
            <div className="flex">
              <div className="body w-3/5 h-auto shadow-none mt-8 mr-20">
                <Typography className="mb-3 ml-2" variant="h4">
                  Medicines
                </Typography>
                <TableMedicine medicine={medicine}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SLayout;
