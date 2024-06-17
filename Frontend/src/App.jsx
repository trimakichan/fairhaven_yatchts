import './assets/sass/main.scss';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import  Layout  from './screens/Layout';
import HomePage from './screens/HomePage';
import Listings from './screens/Listings';
import SellYachts from './screens/SellYachts';
import About from './screens/About'
import Contact from './screens/Contact'
import ListingDetails from './screens/ListingDetails';

//When the router changes, the screen scrolls up to the top. 
const LayoutWithScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout>{children}</Layout>;
};

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <LayoutWithScrollToTop />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }, {
        path: 'buy',
        element: <Listings />
      },
      {
        path: 'sell',
        element: <SellYachts />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '/:id',
        element: <ListingDetails />
      }
    ]
  },
    // {
    //   path: "fy-admin",
    //   element: <ProtectedRoute />,
    //   children: [
    //     {
    //       path: '/fy-admin/dashboard',
    //       element: <Dashboard />
    //     }
    //   ]
    // }
  ])

  return (
    <RouterProvider router={router} />
  )

}

export default App


