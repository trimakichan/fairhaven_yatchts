import "./assets/sass/main.scss";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Layout from "./screens/Layout";
import Loading from "./components/Loading/Loading";

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

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
