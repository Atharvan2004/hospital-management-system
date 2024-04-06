import React from "react";
import "../styles/LayoutStyles.css"
import { PatientMenu } from "@/Data/SideBarMenu";
import { Link, useLocation } from "react-router-dom";

const Layout = ({children}) => {

  const location= useLocation();
  return(
    <>
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
              <h6>DOC APP</h6>
              <hr />
          </div>
          <div className="menu">
            {PatientMenu.map(menu=>{
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
          <div className="header">Header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Layout;
