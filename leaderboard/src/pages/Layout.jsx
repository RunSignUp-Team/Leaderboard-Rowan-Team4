import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;