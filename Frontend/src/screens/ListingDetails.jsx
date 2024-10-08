import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import {
  useFadeInYAxisAnimSettings,
  useFadeInAnimSettings,
} from "../animations/animationHooks";
import { useParams } from "react-router-dom";
import { useBoatListingsById } from "../api/fetchListings";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { brokersInfo } from "../data/brokersInfo";
import Loading from "../components/Loading/Loading";
import ImageDetailSection from "../components/ImageDetailSection/ImageDetailSection";
import SalesRepPopUp from "../components/SalesRepPopUp/SalesRepPopUp";

//icons
import { GrLocation } from "react-icons/gr";
import {  AiOutlineCloseCircle } from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BsChatText } from "react-icons/bs";
import { PiChatsDuotone } from "react-icons/pi";

const ListingDetails = () => {
  const fadeInYAxisAnimSettings = useFadeInYAxisAnimSettings();
  const fadeInAnimSettings = useFadeInAnimSettings();
  const [IsSaleRepOpen, setIsSaleRepOpen] = useState(false);
  const [broker, setBroker] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: boatListing,
  } = useBoatListingsById(id);

  useEffect(() => {
    if (boatListing) {
      const findBroker = brokersInfo.find(
        (obj) =>
          boatListing.SalesRep.PartyId == obj.salesRepId ||
          boatListing.SalesRep.Name.includes(obj.firstName)
      );
      setBroker(findBroker || brokersInfo[0]);
    }
  }, [boatListing]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const setFixedFontSize = (text) => {
    if (!text) return;
    let description;
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

  const sendText = () => {
    if (isMobile) {
      sendSMS(
        broker.cell,
        `Hi! I am interested in the ${boatListing.MakeString} ${boatListing.Model}.`
      );
    } else {
      alert("This funciton is only available on mobile devices.");
    }
  };

  const sendSMS = (phoneNumber, message) => {
    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.open(url);
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="listingDetails">
      <div className="contact-aside">
        <AnimatePresence>
          {IsSaleRepOpen && (
            <motion.div
              key="salesRep-popup"
              className="salesRep-popup"
              initial={{
                opacity: 0,
                y: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 0, x: 50 }}
            >
              <SalesRepPopUp
                broker={broker}
                boatInfo={{
                  make: boatListing.MakeString,
                  model: boatListing.Model,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {IsSaleRepOpen ? (
          <div className="message-close">
            <AiOutlineCloseCircle
              className="message-clsoe-icon"
              aria-label="Close Contact Popup"
              onClick={() => setIsSaleRepOpen(!IsSaleRepOpen)}
            />
          </div>
        ) : (
          <motion.div
            className="brokerImage-icon"
            aria-label="Contact Sales"
            onClick={() => {
              setIsSaleRepOpen(!IsSaleRepOpen);
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.0],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            {broker && (
              <img
                src={broker.image}
                alt={`${broker.firstName} ${broker.lastName} Profile Image`}
                title={`${broker.firstName} ${broker.lastName}`}
                loading="lazy"
              />
            )}
          </motion.div>
        )}
      </div>

      <div className="wrapper listingDetails-title-bg">
        <div className=""></div>

        <button className="go-back" onClick={handleGoBack}>
          <RxDoubleArrowLeft /> Go back
        </button>

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

          <div className="description-content">
            <div className="boat-description">
              {boatDescription && <p>{parse(boatDescription)}</p>}
              {additionalDescription && <p>{parse(additionalDescription)}</p>}
            </div>
            <aside className="boat-salesRep">
              <header className="textLLora salesRep-title">
                Contact Me
                <PiChatsDuotone />
              </header>

              {broker && (
                <div className="salesRep-body">
                  {" "}
                  <figure className="salesRep-image">
                    <img
                      src={broker.image}
                      alt={`${broker.firstName} ${broker.lastName} Profile Image`}
                      title={`${broker.firstName} ${broker.lastName}`}
                      loading="lazy"
                    />
                    <figcaption className="textMLora">
                      {broker.firstName} {broker.lastName}{" "}
                    </figcaption>
                  </figure>
                  <div className="contact-types">
                    <a
                      href={`tel:${broker.cell}`}
                      aria-label="Call the broker"
                      className="button"
                    >
                      <FiPhone />
                      <div className="textSLora bold">Call</div>
                    </a>
                    {isMobile && (
                      <a aria-label="Text the broker" onClick={sendText}>
                        <BsChatText />
                        <div className="textSLora bold">Text</div>
                      </a>
                    )}
                    <a
                      href={`mailto: ${broker.email}`}
                      aria-label="Email the broker"
                    >
                      <TfiEmail />
                      <div className="textSLora bold">Email</div>
                    </a>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ListingDetails;
