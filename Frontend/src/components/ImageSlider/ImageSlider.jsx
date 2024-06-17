import { useCallback, useContext, useState } from "react";
import "./imageSlider.scss";

import { AiTwotoneCloseSquare } from "react-icons/ai";
import {
  PiArrowSquareLeftDuotone,
  PiArrowSquareRightDuotone,
} from "react-icons/pi";

import { Contexts } from "../../contexts/contexts";

const ImageSlider = ({ data: { images, index } }) => {
  const { setIsImageSliderOn } = useContext(Contexts);
  console.log(images);
  const slides = images?.map((item) => item.Uri);
  // console.log(slides)

  const [currentIndex, setCurrentIndex] = useState(index);

  const changeSlide = useCallback(
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
    <div className="imageSlider">
      {slides && slides.length > 0 && (
        <>
          <AiTwotoneCloseSquare
            className="close-style closePositions"
            aria-label="Close Image Slider"
            onClick={() => setIsImageSliderOn(false)}
          />
          <div className="slider-content">
            <PiArrowSquareLeftDuotone
              className="arrow-style arrowPositionLeft"
              aria-label="Previous Slide"
              onClick={() => changeSlide("left")}
            />
            <img src={slides[currentIndex]} alt="one of sliding images" />
            <PiArrowSquareRightDuotone
              className="arrow-style arrowPositionRight"
              aria-label="Next Slide"
              onClick={() => changeSlide("right")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
