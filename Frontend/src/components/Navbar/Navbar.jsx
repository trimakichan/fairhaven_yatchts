/* eslint-disable no-unused-vars */
import { useState, useContext, useRef } from "react";
import "./navbar.scss";

import { Contexts } from "../../contexts/contexts";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { getSlidingAnimSettings } from "../../animations/animationHooks";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

const Navbar = () => {
  const { openNav, setOpenNav } = useContext(Contexts);
  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState(false);
  const { isNavAnimFinished, setIsNavAnimFinished } = useContext(Contexts);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 300 && !openNav) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/buy", text: "Our Listings" },
    { href: "/sell", text: "Sell Yachts" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  //Optimize this code later
  const renderLink = (link, index, isMobileLinks = false) => {
    if (isMobileLinks) {
      return (
        <motion.a
          key={index}
          href={link.href}
          {...getSlidingAnimSettings(0.2, index)}
          // onAnimationComplete={() => {
          //   setIsNavAnimFinished(true);
          //   console.log("Completed animating");
          // }}
        >
          {link.text}
        </motion.a>
      );
    }

    return (
      <motion.a key={index} href={link.href}>
        {link.text}
      </motion.a>
    );
  };

  return (
    <motion.nav
      aria-label="primary-navigation"
      className="navbar textSPlayfair"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={navHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="navbar__container">
        <div className="logo">
          <a href="/">
            <img src="/logo.webp" alt="Fairhaven Yachts Logo" />
          </a>
        </div>
        <div className="links">
          {navLinks.map((link, index) => renderLink(link, index))}

          {/* For smaller screen */}
          <div className={openNav ? "menu-icon inactive" : "menu-icon"}>
            <div className="icons-container">
              <a href="tel:1-206-940-9088">
                <TiPhoneOutline className="icon phone-icon" />
              </a>

              <CiMenuFries
                className="icon"
                onClick={() => setOpenNav(!openNav)}
              />
            </div>
          </div>
          <div className={openNav ? "menu active" : "menu"}>
            <IoCloseOutline
              className="close-icon"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            />
            <a href="/" className="logo-link">
              <img src="/logo.webp" alt="Fairhaven Yachts Logo" />
            </a>
            <div className="menu-nav-links">
              {navLinks.map((link, index) => renderLink(link, index, true))}
            </div>
            <div className="textSPlayfair menu-nav-footer">
              FAIRHAVEN YACHTS
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
