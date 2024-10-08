import { useContext, useRef } from "react";
import "./mobileImageList.scss";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { Contexts } from "../../contexts/contexts";
import { handleTouchStart, handleTouchMove, handleTouchEnd } from "../../utilities/utilities";

const MobileImageList = ({ images }) => {
  const imageArray = images.map((item) => item.Uri);
  const { isMobileSliderOn, setIsMobileSliderOn } = useContext(Contexts);
  const mobileTouchRef = useRef(null);

  // let touchStart = 0;
  // let touchEnd = 0;

  // // Scroll Horizontally on Mobile by touching.
  // const handleTouchStart = (e) => {
  //   touchStart = e.targetTouches[0].clientY;
  // };

  // const handleTouchMove = (e) => {
  //   touchEnd = e.targetTouches[0].clientY;
  // };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 50) {
  //     moveSlide("touch", "up");
  //   } else if (touchEnd - touchStart > 50) {
  //     moveSlide("touch", "down");
  //   }
  // };

  // This function is use for both mobile and desktop scrolls
  const moveSlide = (type, direction) => {
    const scrollAmount = 350;

    if (
      (type === "click" && mobileTouchRef.current) ||
      mobileTouchRef.current
    ) {
      if (direction === "down") {
        mobileTouchRef.current.scrollLeft -= scrollAmount;
      } else if (direction === "up") {
        mobileTouchRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div
      className="mobileImageList"
      ref={mobileTouchRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => handleTouchEnd(moveSlide)}
    >
      {imageArray && imageArray.length > 0 && (
        <>
          <AiTwotoneCloseSquare
            className="closeStyle closePosition"
            aria-label="Close Image Slider"
            onClick={() => setIsMobileSliderOn(!isMobileSliderOn)}
          />
          {imageArray.map((uri, index) => (
            <img
              key={index}
              src={uri}
              alt="one of the boat images"
              loading="lazy"
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MobileImageList;
