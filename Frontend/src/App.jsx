import "./assets/sass/main.scss";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import Layout from "./screens/Layout";
import Loading from "./components/Loading/Loading";
// import HomePage from './screens/HomePage';
// import Listings from './screens/Listings';
// import SellYachts from './screens/SellYachts';
// import About from './screens/About'
// import Contact from './screens/Contact'
// import ListingDetails from './screens/ListingDetails';

const HomePage = lazy(() => import("./screens/HomePage"));
const Listings = lazy(() => import("./screens/Listings"));
const SellYachts = lazy(() => import("./screens/SellYachts"));
const About = lazy(() => import("./screens/About"));
const Contact = lazy(() => import("./screens/Contact"));
const ListingDetails = lazy(() => import("./screens/ListingDetails"));

//When the router changes, the screen scrolls up to the top.
const LayoutWithScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout>{children}</Layout>;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWithScrollToTop />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "buy",
          element: <Listings />,
        },
        {
          path: "sell",
          element: <SellYachts />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/:id",
          element: <ListingDetails />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
