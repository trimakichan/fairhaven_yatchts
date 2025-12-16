/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Contexts } from "../contexts/contexts";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import Card from "../components/Card/Card";
import { useBoatListings } from "../api/fetchListings";
import Loading from "../components/Loading/Loading";
import SearchBar from "../components/SearchBar/SearchBar";

const Listings = () => {
  const { boatResults } = useContext(Contexts);
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();

  const {
    isLoading,
    isError,
    error,
    isFetching,
    data: boatListings,
  } = useBoatListings();

  return (
    <main className="listings">
      <header className="listings__hero"></header>

      <div className="wrapper">
        <section className="listings__sale">
          <header className="sale-header">
            <motion.div className="sale-title" {...fadeInAnimSettings}>
              <h2 className="listings-bg-text">Yachts for Sale</h2>
              <p>Browse our catalog of yachts for sale.</p>
              <AnchorIcon />
            </motion.div>
          </header>

          {isError ? (
            <div className="textMLora">{error}</div>
          ) : boatListings ? (
            <>
              <div className="sale-filter">
                <SearchBar allBoats={boatListings} />
              </div>

              <div className="sale-listings">
                {boatResults &&
                  boatResults.length > 0 &&
                  boatResults.map((boat, index) => (
                    <Card key={index} item={boat} />
                  ))}
              </div>
            </>
          ) : (
            <Loading />
          )}
        </section>
      </div>

      <section className="listings__section">
        <div className="wrapper sectionLayout">
          <div className="sectionContentLayout listings-section-content-container">
            <motion.h2 {...fadeInAnimSettings}>
              Find Your Dream Yacht Today
            </motion.h2>
            <motion.p {...fadeInAnimSettings}>
              Contact our brokers to get more information about the yachts
              available for sale.
            </motion.p>
            <Link to="/contact">
              <motion.button {...fadeInAnimSettings}>Contact Us</motion.button>
            </Link>
          </div>
          <img
            src="/listingsPage/listings2.webp"
            alt="An image of a mid-sized boat on the blue ocean."
            className="imageCover"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default Listings;
