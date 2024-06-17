import "./salesRepPopUp.scss";
import { brokersInfo } from "../../data/brokersInfo";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BsChatText } from "react-icons/bs";

const SalesRepPopUp = ({ salesRep, boatInfo }) => {
  console.log(salesRep);
  const [broker, setBroker] = useState(null);
  console.log(broker);

  useEffect(() => {
    if (salesRep) {
      const matchingBroker = brokersInfo.find(
        (obj) =>
          salesRep.PartyId == obj.salesRepId ||
          salesRep.Name.includes(obj.firstName)
      );

      setBroker(matchingBroker || brokersInfo[0]); // Fallback to the owner if no match is found
    }
  }, [salesRep]);

  const sendText = () => {
    if (isMobile) {
      sendSMS(
        broker.cell,
        `Hi! I am interested in the ${boatInfo.make} ${boatInfo.model}.`
      );
    } else {
      alert("This funciton is only available on mobile devices.");
    }
  };

  const sendSMS = (phoneNumber, message) => {
    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.open(url);
  };

  return (
    broker && (
      <aside className="popUp">
        <header className="popUp__title bold ">
          <div className="textLLora">How Can I Help?</div>
        </header>
        <section className="popUp__content">
          <figure className="broker-top">
            <div className="broker-image">
              <img
                src={broker.image}
                alt={`${broker.firstName} ${broker.lastName} Profile Image`}
                title={`${broker.firstName} ${broker.lastName}`}
              />
            </div>
            <figcaption>
              <div className="textMLora">
                {broker.firstName} {broker.lastName}{" "}
                {broker.isOwner ? "| Owner" : "| Yacht Broker"}
              </div>
            </figcaption>
          </figure>

          <section className="broker-bottom">
            <div className="textMLora">
              Hi! I am {broker.firstName}! I'd be happy to provide you with
              additional information and specific details to assist you further.
            </div>

            <div className="contact-buttons">
              <a href={`tel:${broker.cell}`}>
                <button aria-label="Call the broker">
                  <FiPhone />
                  <div className="textSLora bold">Call</div>
                </button>
              </a>
              {/* Text button will show if the device is mobile */}
              {isMobile && (
                <button aria-label="Text the broker" onClick={sendText}>
                  <BsChatText />
                  <div className="textSLora bold">Text</div>
                </button>
              )}
              <a href={`mailto: ${broker.email}`}>
                <button aria-label="Email the broker">
                  <TfiEmail />
                  <div className="textSLora bold">Email</div>
                </button>
              </a>
            </div>
          </section>
        </section>
      </aside>
    )
  );
};

export default SalesRepPopUp;
