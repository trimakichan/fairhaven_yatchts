/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const Contexts = createContext({})

export const ContextsProvider = ({ children }) => {
    const [openNav, setOpenNav] = useState(false);
    const [isMobileSliderOn, setIsMobileSliderOn] = useState(false);
    const [isImageSliderOn, setIsImageSliderOn] = useState(false);
    const [isNavAnimFinished, setIsNavAnimFinished] = useState(null);
    const [filteredResults, setFilteredResults] = useState([])
    console.log(filteredResults)


    return (
      <Contexts.Provider
        value={{
          openNav,
          setOpenNav,
          isMobileSliderOn,
          setIsMobileSliderOn,
          isImageSliderOn,
          setIsImageSliderOn,
          isNavAnimFinished,
          setIsNavAnimFinished,
          filteredResults,
          setFilteredResults,
        }}
      >
        {children}
      </Contexts.Provider>
    );
}