/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { brokersInfo } from "../data/brokersInfo";

export const Contexts = createContext({});

export const ContextsProvider = ({ children }) => {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  const [isOpenNavForSlider, setIsOpenNavForSlider] = useState(false);
  const [isMobileSliderOn, setIsMobileSliderOn] = useState(false);
  const [isImageSliderOn, setIsImageSliderOn] = useState(false);
  const [isNavAnimFinished, setIsNavAnimFinished] = useState(null);
  const [boatResults, setBoatResults] = useState([]);
  const [memberMain, setMemberMain] = useState(brokersInfo[0]);

  return (
    <Contexts.Provider
      value={{
        isOpenNavMobile,
        setIsOpenNavMobile,
        isMobileSliderOn,
        isOpenNavForSlider,
        setIsOpenNavForSlider,
        setIsMobileSliderOn,
        isImageSliderOn,
        setIsImageSliderOn,
        isNavAnimFinished,
        setIsNavAnimFinished,
        boatResults,
        setBoatResults,
        memberMain,
        setMemberMain,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
