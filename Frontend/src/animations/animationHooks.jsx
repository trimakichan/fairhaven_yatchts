import {
  fadeInVariants,
  fadeInYAxisVariants,
  slidingVariants,
} from "./animationVariants";

//animation is not working, check later
export function useFadeInAnimSettings() {
  return {
    variants: fadeInVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: { duration: 0.3 },
  };
}

export function useFadeInYAxisAnimSettings() {
  return {
    variants: fadeInYAxisVariants,
    initial: "initial",
    whileInView: "animate",
    transition: { ease: "anticipate", duration: 1.5 },
    viewport: { once: true },
  };
}

//remove code redundancies later
export function getDelayedFadeInAnimSettings(delaySpeed, index) {
  return {
    variants: fadeInYAxisVariants,
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    transition: {
      delay: delaySpeed * index,
      ease: "anticipate",
      duration: 1,
    },
    custom: index,
  };
}

export function getSlidingAnimSettings(delaySpeed, index) {
  return {
    variants: slidingVariants,
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    transition: {
      delay: delaySpeed * index,
      ease: "anticipate",
      duration: 1,
    },
    custom: index,
  };
}
