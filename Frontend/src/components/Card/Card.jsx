/* eslint-disable react/prop-types */
import './card.scss';
import { Link } from "react-router-dom";
import { getCutoffDate } from '../../utilities/utilities';

const Card = ({ item }) => {
    const cutoffDate = getCutoffDate();
     const itemDate = new Date(item.ItemReceivedDate);

    return (
      <div className="card">
        <Link to={`/${Number(item.DocumentID)}`}>
          <div className="card__image">
            {itemDate > cutoffDate ? (
              <div className="textSRobot new-tag">New Listing</div>
            ) : (
              ""
            )}

            <img
              src={item.Images[0].Uri}
              alt={`${item.MakeString} Main Image`}
            />
          </div>
        </Link>

        <div className="card__context">
          <p className="listingTitle">{item.BuilderName || item.MakeString}</p>
          {/* write a function to compared the two prices if it is the same or not */}
          {/* {item.OriginalPrice !== item.Price ? <p>{item.OriginalPrice}</p> : null}  */}
          <p>
            {parseFloat(item.Price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0, 
              maximumFractionDigits: 0,
            })}
          </p>

          <div className="textSJost">
            {item.BoatLocation.BoatCityName}, {item.BoatLocation.BoatStateCode}
          </div>

          <Link to={`/${item.DocumentID}`}>
            <p>
              <span className="linkText hoverEffectColor">
                View Details&nbsp; &gt;
              </span>
            </p>
          </Link>
        </div>
      </div>
    );
};

export default Card 