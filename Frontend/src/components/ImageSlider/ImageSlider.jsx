import { useCallback, useContext, useRef, useState } from "react";
import "./imageSlider.scss";
import { handleTouchStart, handleTouchMove, handleTouchEnd } from "../../utilities/utilities";

import { AiTwotoneCloseSquare } from "react-icons/ai";
import {
  PiArrowSquareLeftDuotone,
  PiArrowSquareRightDuotone,
} from "react-icons/pi";

import { Contexts } from "../../contexts/contexts";

const ImageSlider = ({ data: { images, index } }) => {
  const { setIsImageSliderOn } = useContext(Contexts);
  const sliderRef = useRef(null);
  console.log(images);
  const slides = images?.map((item) => item.Uri);
  // console.log(slides)

  const [currentIndex, setCurrentIndex] = useState(index);

  const moveSlide = useCallback(
    (direction) => {
      if (direction === "left") {
        if (currentIndex === 0) {
          setCurrentIndex(slides.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      } else if (direction === "right") {
        if (currentIndex === slides.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    },
    [currentIndex, slides.length]
  );

  if (!images) {
    return <div>No slides available.</div>;
  }

  return (
    <div
      className="imageSlider"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => handleTouchEnd(moveSlide)}
    >
      {slides && slides.length > 0 && (
        <>
          <AiTwotoneCloseSquare
            className="closeStyle closePositions"
            aria-label="Close Image Slider"
            onClick={() => setIsImageSliderOn(false)}
          />
          <div className="slider-content">
            <PiArrowSquareLeftDuotone
              className="arrowStyle arrow-position-left"
              aria-label="Previous Slide"
              onClick={() => moveSlide("left")}
            />
            <div className="slider-content-image">
              <img
                src={slides[currentIndex]}
                alt="one of the boat images"
                loading="lazy"
              />
            </div>
            <PiArrowSquareRightDuotone
              className="arrowStyle arrow-position-right"
              aria-label="Next Slide"
              onClick={() => moveSlide("right")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
