/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import {
  useFadeInYAxisAnimSettings,
  useFadeInAnimSettings,
} from "../animations/animationHooks";
import { useParams } from "react-router-dom";
import { useBoatListingsById } from "../api/fetchListings";
import Loading from "../components/Loading/Loading";
import ImageDetailSection from "../components/ImageDetailSection/ImageDetailSection";
import SalesRepPopUp from "../components/SalesRepPopUp/SalesRepPopUp";

//icons
import { GrLocation } from "react-icons/gr";
import { AiOutlineMessage, AiOutlineCloseCircle } from "react-icons/ai";


const ListingDetails = () => {
  const fadeInYAxisAnimSettings = useFadeInYAxisAnimSettings();
  const fadeInAnimSettings = useFadeInAnimSettings();

  const [isContactPopupOn, setIsContactPopupOn] = useState(false);
  // console.log(isContactPopupOn);
  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: boatListing,
  } = useBoatListingsById(id);
  // console.log(boatListing);

  const setFixedFontSize = (text) => {
    if (!text) return;

    let description;
    //remove all the styles in the html strings.
    description = text.replace(/ style="[^"]*"/g, "");
    return description.replace(
      /<strong>customContactInformation<\/strong><br>/g,
      ""
    );
  };

  const boatDescription = setFixedFontSize(
    boatListing?.GeneralBoatDescription[0]
  );

  let additionalDescription;
  const additionalinfo = boatListing?.AdditionalDetailDescription;
  if (additionalinfo?.length > 0) {
    setFixedFontSize(additionalinfo[additionalinfo.length - 1]);
    additionalDescription = setFixedFontSize(
      additionalinfo[additionalinfo.length - 1]
    );
  }

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="listingDetails">
      <div className="contact-aside">
        {isContactPopupOn ? (
          <>
            <div className="salesRep-container">
              <SalesRepPopUp
                salesRep={boatListing.SalesRep}
                boatInfo={{
                  make: boatListing.MakeString,
                  model: boatListing.Model,
                }}
              />
            </div>
            <motion.div {...fadeInAnimSettings}>
              <AiOutlineCloseCircle
                className="message-clsoe-icon"
                aria-label="Close Contact Popup"
                onClick={() => setIsContactPopupOn(!isContactPopupOn)}
              />
            </motion.div>
          </>
        ) : (
          <motion.div {...fadeInAnimSettings}>
            <AiOutlineMessage
              className="message-icon"
              aria-label="Contact Sales"
              onClick={() => setIsContactPopupOn(!isContactPopupOn)}
            />
          </motion.div>
        )}
      </div>

      {/* Title Section */}
      <div className="wrapper listingDetails-title-bg">
        <motion.div
          className="listingDetails__title"
          {...fadeInYAxisAnimSettings}
        >
          <h1>
            <span>
              {`${boatListing.ModelYear} ${
                boatListing.BuilderName || boatListing.MakeString
              } ${boatListing.Model}`}
            </span>
          </h1>

          <div className="textMJost listingDetails__title__info ">
            <div>
              {parseFloat(boatListing.Price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <div className="info-location">
              <GrLocation className="iconStyles" />{" "}
              {boatListing.BoatLocation.BoatCityName},{" "}
              {boatListing.BoatLocation.BoatStateCode}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <ImageDetailSection boatListing={boatListing} />

      <div className="wrapper">
        <motion.div
          className="listingDetails__description"
          {...fadeInAnimSettings}
        >
          <div className="description-title">
            <h2>Description</h2>
            <div className="line"></div>
          </div>

          <div className="boat-description">
            {boatDescription && <p>{parse(boatDescription)}</p>}

            {additionalDescription && <p>{parse(additionalDescription)}</p>}
          </div>

          {/* <div className="listingDetails-button-container">
              <a href="tel:1-206-940-9088">
                <button className="call-button">Call</button>
              </a>
              <a href="mailto:fairhavenyachtsales@gmail.com">
                <button className="email-button">Email</button>
              </a>
            </div> */}
        </motion.div>
      </div>
    </main>
  );
};

export default ListingDetails;
