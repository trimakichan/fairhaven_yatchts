/* eslint-disable no-unused-vars */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { Contexts } from "../contexts/contexts";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const {
    isOpenNavMobile,
    setIsOpenNavMobile,
    isOpenNavForSlider,
    isMobileSliderOn,
    isImageSliderOn,
  } = useContext(Contexts);

  const toggleNav = () => setIsOpenNavMobile();

  return (
    <div className="layout" onClick={isOpenNavMobile ? toggleNav : undefined}>
      <header>
        {isOpenNavForSlider ? '' : <Navbar />}
      </header>
      <div className={isOpenNavMobile || isImageSliderOn ? "lock" : ""}>
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
