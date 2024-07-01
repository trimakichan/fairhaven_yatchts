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
    <>
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
    </>
  );
};

export default Layout;

// const ProtectedRoute = () => {
//     const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
//     const location = useLocation();

//     useEffect(() => {
//         if (location.pathname === '/fy-admin' && !user) {
//             console.log("Attempting to redirect...");
//             loginWithRedirect();
//         }

//     }, [loginWithRedirect, location.pathname, user]);

//     // if (isLoading) {
//     //     return <div >Loading ...</div>;
//     // }

//     return isAuthenticated &&
//         (<div className="layout">
//             <Outlet />
//         </div>)

// }
