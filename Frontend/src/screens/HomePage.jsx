/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AnchorIcon from "../components/AnchorIcon/AnchorIcon";
import Card from "../components/Card/Card";

// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useFadeInYAxisAnimSettings } from "../animations/animationHooks";
import { useBoatListings } from "../api/fetchListings";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCutoffDate } from "../utilities/utilities";
import Loading from "../components/Loading/Loading";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";

const MAX_ITEMS_PER_LOAD = 3;

const HomePage = () => {
  const fadeInAnimSettings = useFadeInYAxisAnimSettings();
  const [newListings, setNewListings] = useState(null);
  const [visibleCount, setVisibleCount] = useState(MAX_ITEMS_PER_LOAD);
  const [newListingsInitial, setNewListingsInitial] = useState(null);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const {
    isLoading,
    isError,
    error,
    isFetching,
    data: listings,
  } = useBoatListings();
  // console.log(listings);

  useEffect(() => {
    if (listings) {
      const cutoffDate = getCutoffDate();
      const filteredListings = listings.filter((item) => {
        const itemDate = new Date(item.ItemReceivedDate);
        return itemDate > cutoffDate && item.SalesStatus === "Active";
      });
      setNewListings(filteredListings);

      // Update the initial displayed listings
      const initialLoad = filteredListings.slice(0, visibleCount);
      setNewListingsInitial(initialLoad);
    }
  }, [listings, visibleCount]);

  // Function to load more listings
  const loadMore = () => {
    setVisibleCount((prev) => newListings.length);
    setIsLoadMore(true);
  };

  const hide = () => {
    setVisibleCount(MAX_ITEMS_PER_LOAD);
    setIsLoadMore(false);
  };

  return (
    <main className="homePage">
      <header className="homePage__hero">
        <div className="hero-content">
          <motion.div className="heroHeadingText" {...fadeInAnimSettings}>
            <span className="spanText">WELCOME TO</span> <br />
            FAIRHAVEN YACHTS
          </motion.div>
          <p className="heroParagraph ">
            Experience the pleasure of owning a yacht. <br></br>Browse our
            collection and make your dreams a reality.
          </p>
          <div className="hero-buttons">
            <Link to="buy">
              <button
                aria-label="Explore our yacht collection"
                className="explore-button"
              >
                Explore
              </button>
            </Link>
            <Link to="about">
              <button
                aria-label="Learn more about Fairhaven Yachts"
                className="learnMore-button"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <section className="homePage__intro">
          <motion.h1 className="homePage-intro-title" {...fadeInAnimSettings}>
            {" "}
            <span>Experienced</span> Yacht Brokerage
          </motion.h1>
          <motion.div
            className="homePage-intro-description subtitle"
            {...fadeInAnimSettings}
          >
            Welcome to our premier yacht brokerage firm, where we provide
            exceptional service and expertise in facilitating smooth
            transactions for yacht owners and buyers. With our extensive network
            and deep understanding of the industry, we are dedicated to
            delivering unparalleled results and exceeding your expectations.
          </motion.div>
        </section>
      </div>

      <article className="homePage__listings" id="new-listings">
        <div className="wrapper">
          <div className="listing-title-container">
            <motion.div className="listing-title" {...fadeInAnimSettings}>
              <p>Yachts</p>
              <h2 className="home-bg-text">New Listings</h2>
              <div className="subtitle">
                Explore our new and featured yacht listings.
              </div>
              <AnchorIcon />
            </motion.div>
          </div>

          <div className="newListings-container">
            {/* <Loading /> */}
            {isLoading && <Loading />}
            {newListings &&
              newListingsInitial.map((listing, index) => {
                return <Card key={index} item={listing} />;
              })}
          </div>

          <div className="newListings-buttons">
            <a
              href={!isLoadMore && "#new-listings"}
              aria-label="View all the new listings"
              onClick={!isLoadMore ? loadMore : hide}
            >
              {!isLoadMore ? "View all" : "Hide"}
            </a>{" "}
          </div>
        </div>
      </article>

      <div className="wrapper">
        <section className="homePage__section1 sectionLayout">
          <motion.article
            className="sectionContentLayout section1-content"
            {...fadeInAnimSettings}
          >
            <h2>Find Your Dream Yacht Today</h2>
            <p>
              At our yacht brokerage firm, we offer expert brokers, a global
              network, and personalized service to help you buy or sell your
              yacht. With our extensive knowledge and connections in the
              industry, we can facilitate smooth transactions and ensure a
              seamless experience for our clients.
            </p>
            <ul>
              <li className="textMJost">Expert Brokers</li>
              <li className="textMJost">Global Network</li>
              <li className="textMJost">Personalized Service</li>
            </ul>
            <Link to="about" className="section1-button">
              <button aria-label="Learn more about Fairhaven Yachts">
                Learn More
              </button>
            </Link>
          </motion.article>

          <img
            src="/home2.webp"
            alt="A power boat blasting on the water"
            className="imageCover"
            loading="lazy"
          />
        </section>
      </div>

      <section className="homePage__section2">
        <div className="wrapper sectionLayout">
          <img
            src="/home3.webp"
            alt="marina"
            className="imageCover image-order"
            loading="lazy"
          />

          <motion.div
            className="sectionContentLayout section2-content"
            {...fadeInAnimSettings}
          >
            <h2>
              Discover the Benefits of Working with Our Yacht Brokerage Firm
            </h2>
            <p>
              Our firm offers a seamless experience for both yacht buyers and
              sellers, ensuring smooth transactions and peace of mind.
            </p>
            <div className="section2-benefits">
              <div className="section2-buyer">
                <p className="bold">For Buyers</p>
                <p>
                  Access a wide selection of high-quality yachts and receive
                  expert guidance throughout the buying process.
                </p>
              </div>
              <div className="section2-seller">
                <p className="bold">For Seller</p>
                <p>
                  List your yacht with us and benefit from our extensive network
                  and marketing expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="homePage__callAction">
        <div className="callAction-content">
          <h2>Discover Your Dream Yacht Today</h2>
          <p>
            Browse our latest listings and find the perfect yacht for your next
            adventure.
          </p>
          <Link to="buy">
            <button aria-label="View listings">View Listings</button>
          </Link>
        </div>
      </section>

      <div className="wrapper">
        <section className="homePage__reviews">
          <CustomerReviews />
        </section>
      </div>

      <aside className="homePage__banners">
        <div className="wrapper">
          <motion.div className="banners-container" {...fadeInAnimSettings}>
            <a href="https://www.yachtingmagazine.com/" target="_blank">
              <img
                src="/banners/yachting-logo.webp"
                alt="Yachting Magazine Logo"
                title="Yachting Magazine"
                loading="lazy"
              />
            </a>
            <a href="https://www.passagemaker.com/" target="_blank">
              <img
                src="/banners/passagemaker-trawlerfest-logo.webp"
                alt="Passagemaker Trawlerfest Logo"
                title="Passagemaker Trawlerfest"
                loading="lazy"
              />
            </a>
            <a href="https://www.bonhams.com/" target="_blank">
              <img
                src="/banners/bonhams-logo.webp"
                alt="Bohams Auction House Logo"
                title="Bohams Auction House"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.sevenstar-yacht-transport.com/"
              target="_blank"
            >
              <img
                src="/banners/sevenstar-logo.webp"
                alt="Sevenstar Logo"
                title="Sevenstar Yacht Transport"
                loading="lazy"
              />
            </a>
          </motion.div>
        </div>
      </aside>
    </main>
  );
};

export default HomePage;
