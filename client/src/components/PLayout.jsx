import React from "react";
import "../styles/LayoutStyles.css"

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Carousel } from "@material-tailwind/react";

const Layout = ({children}) => {

  const { currentUser, loading, error } = useSelector((state) => state.patient);

  const location= useLocation();

  const PatientMenu = [
    
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "fa-solid fa-list",
    },
    
    {
      name: "Profile",
      path: `/patient-profile/${currentUser._id}`,
      icon: "fa-solid fa-user",
    },
  ];



  return(
    <>
    <div className="main">
  <div className="layout">
    <div className="sidebar">
      <div className="logo">
          <h6>Dashboard</h6>
          <hr />
      </div>
      <div className="menu">
      {PatientMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={menu.path} className={`menu-item`}>
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
      </div>
    </div>
    <div className="content">
      <div className="header">
        <div className="flex gap-5 mb-0">
          <div className="text-2xl font-bold text-center text-700">
            Welcome!!
          </div>
          <div className="text-2xl font-bold text-center text-gray-700">
            {currentUser.name}
          </div>
        </div>
      </div>
      <div>
        <img
          src="\images\Creative Healthcare Billboard Template.png" // Replace with the path to your image
          alt="Description of your image"
          className="max-w-full h-auto" // Apply Tailwind CSS classes for styling
        />
      </div>
      <div className="body">{children}</div>
    </div>
  </div>
</div>

  </>
  );
};

export default Layout;
